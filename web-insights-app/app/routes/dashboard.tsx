import type { LoaderFunction } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";
import { isAuthenticated } from "~/utils/auth";

export const loader: LoaderFunction = async ({ request }) => {
  return await isAuthenticated(request);
};

export default function Dashboard() {
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
