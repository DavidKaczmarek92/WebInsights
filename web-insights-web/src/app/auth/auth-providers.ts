import { APP_INITIALIZER, Provider } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { KeycloakBearerInterceptor, KeycloakService } from 'keycloak-angular';
import { ENV_CONFIG } from 'src/environments/environment-config.token';
import { initializeKeycloak } from './initialize-keycloak';

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

export const providers: Provider[] = [
  KeycloakInitializerProvider,
  KeycloakBearerInterceptorProvider,
  KeycloakService,
];
