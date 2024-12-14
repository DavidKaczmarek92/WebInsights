import { KeycloakService } from 'keycloak-angular';
import { EnvironmentConfig } from '../../environments/environment-config.token';

export function initializeKeycloak(
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
      loadUserProfileAtStartUp: true,
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
      },
      enableBearerInterceptor: true,
      bearerPrefix: 'Bearer',
      bearerExcludedUrls: ['/assets', '/clients/public'],
    });
}
