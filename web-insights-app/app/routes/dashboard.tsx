import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { isAuthenticated } from "~/utils/auth";

export const loader: LoaderFunction = async ({ request }) => {
  await isAuthenticated(request);

  const response = await fetch("http://localhost:8080/workflows");
  const data = await response.json();

  return { data };
};

export default function Dashboard() {
  const data = useLoaderData();

  console.log(data);

  return (
    <div>
      <h1>dashboard</h1>
      <Form action="/auth/keycloak/logout" method="post">
        <button>Logout</button>
      </Form>
      <Link to="/">Go to home page</Link>
    </div>
  );
}
