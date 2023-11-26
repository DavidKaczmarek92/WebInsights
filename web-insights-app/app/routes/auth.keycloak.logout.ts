import type { LoaderFunction } from "@remix-run/node";
import { authenticator, generateLogoutUrl } from "~/utils/auth";

export const loader: LoaderFunction = async ({ request, context }) => {
  await authenticator.logout(request, {
    redirectTo: generateLogoutUrl(),
  });
};
