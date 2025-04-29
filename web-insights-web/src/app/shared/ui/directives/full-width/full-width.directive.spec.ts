import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FullWidthDirective } from './full-width.directive';

@Component({
  template: `<div [wiFullWidth]="isFullWidth">Test</div>`,
  standalone: true,
  imports: [FullWidthDirective],
})
class MockedComponent {
  isFullWidth = false;
}

describe('FullWidthDirective', () => {
  let component: MockedComponent;
  let fixture: ComponentFixture<MockedComponent>;
  let divElement: HTMLDivElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    divElement = fixture.nativeElement.querySelector('div');
  });

  it('should not have w-full class when wiFullWidth is false', () => {
    component.isFullWidth = false;
    fixture.detectChanges();

    expect(divElement.classList).not.toContain('w-full');
  });

  it('should have w-full class when wiFullWidth is true', () => {
    component.isFullWidth = true;
    fixture.detectChanges();

    expect(divElement.classList).toContain('w-full');
  });
});
