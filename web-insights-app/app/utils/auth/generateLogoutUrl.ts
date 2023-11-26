import { isProductionEnv } from "~/utils/isProductionEnv";

export function generateLogoutUrl() {
  return `${isProductionEnv() ? "https" : "http"}://${
    process.env.KEYCLOAK_DOMAIN
  }/realms/WebInsights/protocol/openid-connect/logout`;
}
