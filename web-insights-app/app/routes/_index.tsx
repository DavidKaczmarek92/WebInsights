import type { V2_MetaFunction } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <Link to="/dashboard">Dashboard</Link>
      <Form action="/auth/keycloak" method="post">
        <button>Login</button>
      </Form>
    </>
  );
}
