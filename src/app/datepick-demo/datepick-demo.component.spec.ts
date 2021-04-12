import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickDemoComponent } from './datepick-demo.component';

describe('DatepickDemoComponent', () => {
  let component: DatepickDemoComponent;
  let fixture: ComponentFixture<DatepickDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
