import type { Session } from "@remix-run/server-runtime";
import { authenticator } from "~/utils/auth/auth.server";

export async function isAuthenticated(request: Request | Session) {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/",
  });
}
