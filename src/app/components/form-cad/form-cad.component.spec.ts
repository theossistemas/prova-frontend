import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadComponent } from './form-cad.component';

describe('FormCadComponent', () => {
  let component: FormCadComponent;
  let fixture: ComponentFixture<FormCadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormCadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
