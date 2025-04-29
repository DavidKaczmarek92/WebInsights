import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[wiDisabled]',
  standalone: true,
  host: {
    '[class.opacity-50]': 'wiDisabled',
    '[class.cursor-not-allowed]': 'wiDisabled',
    '[attr.disabled]': 'wiDisabled ? true : null',
  },
})
export class DisabledDirective {
  @Input() wiDisabled = false;
}
