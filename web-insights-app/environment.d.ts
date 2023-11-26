declare global {
  namespace NodeJS {
    interface ProcessEnv {
      COOKIE_SECRET: string;
      KEYCLOAK_DOMAIN: string;
      KEYCLOAK_CLIENT_SECRET: string;
    }
  }
}

export {};
