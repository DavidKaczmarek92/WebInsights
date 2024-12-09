import { InjectionToken } from '@angular/core';

export interface EnvironmentConfig {
  production: boolean;
  keycloak: {
    url: string;
    realm: string;
    clientId: string;
  };
}

export const ENV_CONFIG = new InjectionToken<EnvironmentConfig>(
  'EnvironmentConfig'
);
