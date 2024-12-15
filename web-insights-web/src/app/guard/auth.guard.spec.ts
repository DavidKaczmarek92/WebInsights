import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let keycloakServiceSpy: jasmine.SpyObj<KeycloakService>;
  let routerStateSnapshotSpy: jasmine.SpyObj<RouterStateSnapshot>;
  let activatedRouteSnapshotSpy: jasmine.SpyObj<ActivatedRouteSnapshot>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    keycloakServiceSpy = jasmine.createSpyObj('KeycloakService', [
      'login',
      'isLoggedIn',
      'getUserRoles',
    ]);
    routerStateSnapshotSpy = jasmine.createSpyObj('RouterStateSnapshot', [
      'url',
    ]);
    activatedRouteSnapshotSpy = jasmine.createSpyObj('ActivatedRouteSnapshot', [
      'data',
    ]);

    routerSpy = jasmine.createSpyObj('Router', ['createUrlTree', 'navigate']);

    TestBed.configureTestingModule({
      providers: [
        { provide: KeycloakService, useValue: keycloakServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
    });
  });

  it('should be created', () => {
    const authGuard = TestBed.inject(AuthGuard);
    expect(authGuard).toBeTruthy();
  });

  it('should call login method when user is not authenticated', () => {
    keycloakServiceSpy.isLoggedIn.and.returnValue(false);

    const authGuard = TestBed.inject(AuthGuard);

    authGuard.isAccessAllowed(
      activatedRouteSnapshotSpy,
      routerStateSnapshotSpy
    );

    expect(keycloakServiceSpy.login).toHaveBeenCalled();
  });

  it('should call not call login method when user is authenticated', () => {
    keycloakServiceSpy.isLoggedIn.and.returnValue(true);

    const authGuard = TestBed.inject(AuthGuard);

    authGuard.canActivate(activatedRouteSnapshotSpy, routerStateSnapshotSpy);

    expect(keycloakServiceSpy.login).not.toHaveBeenCalled();
  });

  it('should return true when no roles are required', async () => {
    keycloakServiceSpy.isLoggedIn.and.returnValue(true);

    const authGuard = TestBed.inject(AuthGuard);

    const result = await authGuard.canActivate(
      activatedRouteSnapshotSpy,
      routerStateSnapshotSpy
    );

    expect(result).toBeTrue();
  });

  it('should return true when all required roles are present', async () => {
    keycloakServiceSpy.isLoggedIn.and.returnValue(true);
    keycloakServiceSpy.getUserRoles.and.returnValue(['admin', 'user']);
    activatedRouteSnapshotSpy.data = { roles: ['admin', 'user'] };

    const authGuard = TestBed.inject(AuthGuard);

    const result = await authGuard.canActivate(
      activatedRouteSnapshotSpy,
      routerStateSnapshotSpy
    );

    expect(result).toBeTrue();
  });

  it('should return false when not all required roles are present', async () => {
    keycloakServiceSpy.isLoggedIn.and.returnValue(true);
    keycloakServiceSpy.getUserRoles.and.returnValue(['user']);
    activatedRouteSnapshotSpy.data = { roles: ['admin', 'user'] };

    const authGuard = TestBed.inject(AuthGuard);

    const result = await authGuard.canActivate(
      activatedRouteSnapshotSpy,
      routerStateSnapshotSpy
    );

    expect(result).toBeFalsy();
  });
});
