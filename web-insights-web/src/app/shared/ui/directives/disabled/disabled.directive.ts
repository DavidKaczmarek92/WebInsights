import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[wiDisabled]',
  standalone: true,
  host: {
    '[class.opacity-50]': 'wiDisabled',
    '[class.cursor-not-allowed]': 'wiDisabled',
  },
})
export class DisabledDirective {
  @Input() wiDisabled = false;

  @HostBinding('attr.disabled')
  get isDisabled(): string | null {
    return this.wiDisabled ? 'disabled' : null;
  }
}
