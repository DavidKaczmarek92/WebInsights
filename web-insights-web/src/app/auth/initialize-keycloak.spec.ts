import { KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';
import { initializeKeycloak } from './initialize-keycloak';

describe('initializeKeycloak', () => {
  let keycloakServiceSpy: jasmine.SpyObj<KeycloakService>;

  beforeEach(() => {
    keycloakServiceSpy = jasmine.createSpyObj('KeycloakService', ['init']);
  });

  it('should call initialize keycloak correctly ', () => {
    const initKeycloak = initializeKeycloak(keycloakServiceSpy, environment);

    initKeycloak();

    expect(keycloakServiceSpy.init).toHaveBeenCalledOnceWith({
      config: {
        url: environment.keycloak.url,
        realm: environment.keycloak.realm,
        clientId: environment.keycloak.clientId,
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
  });
});
