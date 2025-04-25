import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DisabledDirective } from '../../directives/disabled/disabled.directive';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
type ButtonSize = 'sm' | 'md' | 'lg';

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
  secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
  danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
  warning: 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500',
};
const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'text-xs py-0.5 px-2',
  md: 'text-sm py-1.5 px-3',
  lg: 'text-base py-2 px-5',
};

@Component({
  selector: 'wi-button',
  standalone: true,
  imports: [CommonModule, DisabledDirective],
  template: `
    <button
      [ngClass]="[
        'px-4 py-2 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
        variantClasses,
        sizeClasses,
        fullWidth ? 'w-full' : '',
      ]"
      [type]="type"
      [wiDisabled]="disabled">
      <ng-content />
    </button>
  `,
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
  @Input() fullWidth = false;

  get variantClasses(): string {
    return VARIANT_CLASSES[this.variant];
  }

  get sizeClasses(): string {
    return SIZE_CLASSES[this.size];
  }
}
