import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevFormRegisterComponent } from './dev-form-register.component';

describe('DevFormRegisterComponent', () => {
  let component: DevFormRegisterComponent;
  let fixture: ComponentFixture<DevFormRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevFormRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevFormRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
