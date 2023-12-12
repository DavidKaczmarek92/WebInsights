import type { LoaderFunction } from "@remix-run/node";

import { authenticator } from "~/utils/auth";

export const loader: LoaderFunction = ({ request }) => {
  return authenticator.authenticate("keycloak", request, {
    successRedirect: "/dashboard",
    failureRedirect: "/",
  });
};
