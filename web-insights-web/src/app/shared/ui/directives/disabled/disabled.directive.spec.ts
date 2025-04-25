import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DisabledDirective } from './disabled.directive';

@Component({
  template: `<button [wiDisabled]="isDisabled">Test Button</button>`,
  standalone: true,
  imports: [DisabledDirective],
})
class MockedComponent {
  isDisabled = false;
}

describe('DisabledDirective', () => {
  let component: MockedComponent;
  let fixture: ComponentFixture<MockedComponent>;
  let buttonElement: HTMLButtonElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
  });

  it('should not add disabled attribute when wiDisabled is false', () => {
    component.isDisabled = false;
    fixture.detectChanges();

    expect(buttonElement.hasAttribute('disabled')).toBe(false);
    expect(buttonElement.classList.contains('opacity-50')).toBe(false);
    expect(buttonElement.classList.contains('cursor-not-allowed')).toBe(false);
  });

  it('should add disabled attribute when wiDisabled is true', () => {
    component.isDisabled = true;
    fixture.detectChanges();

    expect(buttonElement.hasAttribute('disabled')).toBe(true);
    expect(buttonElement.classList.contains('opacity-50')).toBe(true);
    expect(buttonElement.classList.contains('cursor-not-allowed')).toBe(true);
  });
});
