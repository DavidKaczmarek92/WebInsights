import { Component, Input } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { ExampleSecondComponent } from '../example-second/example-second.component';

@Component({
  selector: 'wi-example',
  standalone: true,
  imports: [ExampleSecondComponent],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css',
})
export class ExampleComponent {
  @Input() readonly text = 'Hello, World!';
  private readonly authService: KeycloakService;

  constructor(authService: KeycloakService) {
    this.authService = authService;
  }

  public async logout() {
    await this.authService.logout();
  }
}
