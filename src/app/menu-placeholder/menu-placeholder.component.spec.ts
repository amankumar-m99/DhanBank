import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPlaceholderComponent } from './menu-placeholder.component';

describe('MenuPlaceholderComponent', () => {
  let component: MenuPlaceholderComponent;
  let fixture: ComponentFixture<MenuPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPlaceholderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
