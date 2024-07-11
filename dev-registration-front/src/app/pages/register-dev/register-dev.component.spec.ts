import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDevComponent } from './register-dev.component';

describe('RegisterDevComponent', () => {
  let component: RegisterDevComponent;
  let fixture: ComponentFixture<RegisterDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterDevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
