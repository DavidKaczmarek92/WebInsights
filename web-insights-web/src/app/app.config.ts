import {
  APP_INITIALIZER,
  ApplicationConfig,
  provideZoneChangeDetection,
  Provider,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { KeycloakBearerInterceptor, KeycloakService } from 'keycloak-angular';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

import { routes } from './app.routes';

// TODO: https://medium.com/@ragabon/create-multiple-environment-ts-in-angular-using-env-and-automate-using-node-js-933503fca752
function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      // Configuration details for Keycloak
      config: {
        url: 'http://localhost:8888', // URL of the Keycloak server
        realm: 'WebInsights', // Realm to be used in Keycloak
        clientId: 'insider', // Client ID for the application in Keycloak
      },
      // Options for Keycloak initialization
      initOptions: {
        onLoad: 'check-sso', // Action to take on load
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html', // URI for silent SSO checks
      },
      // Enables Bearer interceptor
      enableBearerInterceptor: true,
      // Prefix for the Bearer token
      bearerPrefix: 'Bearer',
      // URLs excluded from Bearer token addition (empty by default)
      bearerExcludedUrls: ['/assets', '/clients/public'],
    });
}

const KeycloakBearerInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: KeycloakBearerInterceptor,
  multi: true,
};

const KeycloakInitializerProvider: Provider = {
  provide: APP_INITIALIZER,
  useFactory: initializeKeycloak,
  multi: true,
  deps: [KeycloakService],
};

// https://github.com/mauriciovigolo/keycloak-angular/issues/384#issuecomment-1895845160
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptorsFromDi()),
    KeycloakInitializerProvider,
    KeycloakBearerInterceptorProvider,
    KeycloakService,
    provideRouter(routes),
  ],
};
