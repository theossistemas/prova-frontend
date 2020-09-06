import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesenvolvedorCreateComponent } from './desenvolvedor-create.component';

describe('DesenvolvedorCreateComponent', () => {
  let component: DesenvolvedorCreateComponent;
  let fixture: ComponentFixture<DesenvolvedorCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesenvolvedorCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesenvolvedorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
