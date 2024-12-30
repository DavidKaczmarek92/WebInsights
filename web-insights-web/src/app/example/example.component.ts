import { Component, Input } from '@angular/core';
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
}
