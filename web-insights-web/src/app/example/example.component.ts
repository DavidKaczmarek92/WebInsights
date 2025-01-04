import { Component, Input } from '@angular/core';
import { AuthService } from '@app/auth/auth.service';
import { ExampleSecondComponent } from '../example-second/example-second.component';

@Component({
  selector: 'wi-example',
  standalone: true,
  imports: [ExampleSecondComponent],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css',
})
export class ExampleComponent {
  @Input() text = 'Hello, World!';
  isLoading;

  constructor(private readonly authService: AuthService) {
    this.isLoading = this.authService.isLoading;
  }

  async logout() {
    await this.authService.logout();
  }
}
