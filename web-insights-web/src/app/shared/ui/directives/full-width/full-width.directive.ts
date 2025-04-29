import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[wiFullWidth]',
  standalone: true,
})
export class FullWidthDirective {
  @Input() wiFullWidth = false;

  @HostBinding('class.w-full') get isFullWidth(): boolean {
    return this.wiFullWidth;
  }
}
