import type { LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { isAuthenticated, sessionStorage } from "~/utils/auth";

export const loader: LoaderFunction = async ({ request }) => {
  const user = await isAuthenticated(request);

  if (user) {
    const res = await fetch("http://localhost:8080/workflows", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.accessToken}`,
      },
    });

    if (res.status === 401) {
      const currentSession = await sessionStorage.getSession(
        request.headers.get("_session"),
      );

      return redirect("/auth/keycloak", {
        headers: {
          "Set-Cookie": await sessionStorage.destroySession(currentSession),
        },
      });
    }

    const workflows: Array<{ title: string; id: number }> = await res.json();

    return json({ workflows });
  }
};

export default function Dashboard() {
  const data: { workflows: [{ title: string; id: number }] } =
    useLoaderData<typeof loader>();

  return (
    <div>
      <h1>dashboard</h1>
      <Form action="/auth/keycloak/logout" method="post">
        <button>Logout</button>
      </Form>
      <Link to="/">Go to home page</Link>
      {data.workflows.map(({ title, id }) => (
        <h2 key={id}>Workflow title: {title}</h2>
      ))}
    </div>
  );
}
