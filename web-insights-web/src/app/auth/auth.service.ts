import { inject, Injectable, signal } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly keycloakService = inject(KeycloakService);
  private readonly _isLoading = signal(false);
  readonly isLoading = this._isLoading.asReadonly();

  async logout() {
    this._isLoading.set(true);

    try {
      await this.keycloakService.logout();
    } catch (error) {
      this._isLoading.set(false);

      throw error;
    }
  }
}
