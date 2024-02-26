import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { authenticator } from "~/utils/auth";

export const loader: LoaderFunction = () => {
  return redirect("/");
};

export const action: ActionFunction = ({ request }) => {
  return authenticator.authenticate("keycloak", request);
};
