import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let buttonElement: HTMLButtonElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
  });

  it('should initialize with correct default styling', () => {
    expect(buttonElement.classList).toContain('bg-blue-600');
    expect(buttonElement.classList).toContain('text-sm');
    expect(buttonElement.disabled).toBeFalsy();
    expect(buttonElement.classList).not.toContain('w-full');
  });

  it('should apply secondary variant classes when variant is set to secondary', () => {
    component.variant = 'secondary';
    fixture.detectChanges();

    expect(buttonElement.classList).toContain('bg-gray-200');
    expect(buttonElement.classList).toContain('text-gray-800');
  });

  it('should apply danger variant classes when variant is set to danger', () => {
    component.variant = 'danger';
    fixture.detectChanges();

    expect(buttonElement.classList).toContain('bg-red-600');
  });

  it('should apply small size classes when size is set to sm', () => {
    component.size = 'sm';
    fixture.detectChanges();

    expect(buttonElement.classList).toContain('text-xs');
  });

  it('should apply large size classes when size is set to lg', () => {
    component.size = 'lg';
    fixture.detectChanges();

    expect(buttonElement.classList).toContain('text-base');
  });

  it('should set the button type to submit when type is set to submit', () => {
    component.type = 'submit';
    fixture.detectChanges();

    expect(buttonElement.getAttribute('type')).toBe('submit');
  });

  it('should disable the button when disabled is true', () => {
    component.disabled = true;
    fixture.detectChanges();

    expect(buttonElement.disabled).toBe(true);
  });

  it('should apply full width class when fullWidth is true', () => {
    component.fullWidth = true;
    fixture.detectChanges();

    expect(buttonElement.classList).toContain('w-full');
  });
});
