import type { ActionFunction } from "@remix-run/node";
import { authenticator, generateLogoutUrl } from "~/utils/auth";

export const action: ActionFunction = async ({ request }) => {
  await authenticator.logout(request, {
    redirectTo: generateLogoutUrl(),
  });
};
