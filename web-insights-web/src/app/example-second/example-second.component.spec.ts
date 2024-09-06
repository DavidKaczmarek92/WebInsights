import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleSecondComponent } from './example-second.component';

describe('ExampleSecondComponent', () => {
  let component: ExampleSecondComponent;
  let fixture: ComponentFixture<ExampleSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleSecondComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
