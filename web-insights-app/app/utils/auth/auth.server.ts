import { Authenticator } from "remix-auth";
import { KeycloakStrategy } from "remix-auth-keycloak";
import { createCookieSessionStorage } from "@remix-run/node";
import { isProductionEnv } from "~/utils/isProductionEnv";

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_session",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: [process.env.COOKIE_SECRET],
    secure: isProductionEnv(),
  },
});

export type User = {
  accessToken: string;
};

export const authenticator = new Authenticator<User>(sessionStorage);

const keycloakStrategy = new KeycloakStrategy(
  {
    useSSL: isProductionEnv(),
    domain: process.env.KEYCLOAK_DOMAIN,
    realm: "WebInsights",
    clientID: "insider",
    clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
    callbackURL: "/auth/keycloak/callback",
  },
  async ({ accessToken }) => {
    return { accessToken };
  },
);

authenticator.use(keycloakStrategy);
