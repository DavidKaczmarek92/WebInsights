import { Component, Input } from '@angular/core';

@Component({
  selector: 'sp-example',
  standalone: true,
  templateUrl: './example.component.html',
  styleUrl: './example.component.css',
})
export class ExampleComponent {
  @Input() text = 'Hello, World!';
}
