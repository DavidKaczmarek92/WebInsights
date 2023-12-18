import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { authenticator } from "~/utils/auth";

export const loader: LoaderFunction = ({ request }) => {
  return authenticator.authenticate("keycloak", request, {
    successRedirect: "/",
  });
};

export const action: ActionFunction = async ({ request }) => {
  await authenticator.authenticate("keycloak", request);
};
