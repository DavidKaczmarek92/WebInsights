import type { Session } from "@remix-run/server-runtime";
import { authenticator } from "~/utils/auth/auth.server";

export async function isAuthenticated(
  request: Request | Session,
  withRedirect: boolean = true,
) {
  if (withRedirect) {
    return await authenticator.isAuthenticated(request, {
      failureRedirect: "/",
    });
  } else {
    return await authenticator.isAuthenticated(request);
  }
}
