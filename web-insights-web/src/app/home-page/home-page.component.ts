import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ButtonComponent } from '../shared/ui/components/button/button.component';

@Component({
  selector: 'wi-home-page',
  standalone: true,
  imports: [ButtonComponent],
  template: '<wi-button (click)="logout()">Logout</wi-button>',
})
export class HomePageComponent {
  constructor(private authService: AuthService) {}

  async logout() {
    await this.authService.logout();
  }
}
