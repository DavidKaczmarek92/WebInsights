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
import { environment } from '../environments/environment';
import {
  ENV_CONFIG,
  EnvironmentConfig,
} from '../environments/environment-config.token';
import { routes } from './app.routes';

function initializeKeycloak(
  keycloak: KeycloakService,
  config: EnvironmentConfig
) {
  return () =>
    keycloak.init({
      config: {
        url: config.keycloak.url,
        realm: config.keycloak.realm,
        clientId: config.keycloak.clientId,
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html', // URI for silent SSO checks
      },
      enableBearerInterceptor: true,
      bearerPrefix: 'Bearer',
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
  deps: [KeycloakService, ENV_CONFIG],
};

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: ENV_CONFIG, useValue: environment },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptorsFromDi()),
    KeycloakInitializerProvider,
    KeycloakBearerInterceptorProvider,
    KeycloakService,
    provideRouter(routes),
  ],
};
