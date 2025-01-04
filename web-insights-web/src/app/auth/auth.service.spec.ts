import { TestBed } from '@angular/core/testing';

import { KeycloakService } from 'keycloak-angular';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let authService: AuthService;
  let keycloakServiceSpy: jasmine.SpyObj<KeycloakService>;

  beforeEach(() => {
    keycloakServiceSpy = jasmine.createSpyObj('KeycloakService', {
      logout: Promise.resolve(),
    });

    TestBed.configureTestingModule({
      providers: [
        {
          provide: KeycloakService,
          useValue: keycloakServiceSpy,
        },
      ],
    });

    authService = TestBed.inject(AuthService);
  });

  it('should call logout from KeycloakService', () => {
    authService.logout();

    expect(keycloakServiceSpy.logout).toHaveBeenCalled();
    expect(authService.isLoading()).toBeTruthy();
  });

  it('should handle logout failure', async () => {
    keycloakServiceSpy.logout.and.returnValues(Promise.reject('error'));

    try {
      await authService.logout();
    } catch (e) {
      expect(e).toBe('error');
      expect(authService.isLoading()).toBeFalsy();
    }
  });
});
