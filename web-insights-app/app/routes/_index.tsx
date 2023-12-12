import type { LoaderFunction, V2_MetaFunction } from "@remix-run/node";
import type { User } from "~/utils/auth";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { isAuthenticated } from "~/utils/auth";

export const loader: LoaderFunction = async ({ request }) => {
  return await isAuthenticated(request, false);
};
export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const data = useLoaderData<User | null>();

  console.log(data);

  return (
    <>
      <Link to="/dashboard">Dashboard</Link>
      {data ? (
        <Form action="/auth/keycloak/logout" method="post">
          <button>Logout</button>
        </Form>
      ) : (
        <Form action="/auth/keycloak" method="post">
          <button>Login</button>
        </Form>
      )}
    </>
  );
}
