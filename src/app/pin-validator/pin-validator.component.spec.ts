import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinValidatorComponent } from './pin-validator.component';

describe('PinValidatorComponent', () => {
  let component: PinValidatorComponent;
  let fixture: ComponentFixture<PinValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinValidatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
