import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevRegisterPageComponent } from './dev-register-page.component';

describe('DevRegisterPageComponent', () => {
  let component: DevRegisterPageComponent;
  let fixture: ComponentFixture<DevRegisterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevRegisterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
