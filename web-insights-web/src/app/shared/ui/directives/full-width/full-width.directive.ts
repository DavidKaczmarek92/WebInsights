import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[wiFullWidth]',
  standalone: true,
  host: {
    '[class.w-full]': 'wiFullWidth',
  },
})
export class FullWidthDirective {
  @Input() wiFullWidth = false;
}
