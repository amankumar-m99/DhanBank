import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderSpinnerComponent } from './border-spinner.component';

describe('BorderSpinnerComponent', () => {
  let component: BorderSpinnerComponent;
  let fixture: ComponentFixture<BorderSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorderSpinnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorderSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
