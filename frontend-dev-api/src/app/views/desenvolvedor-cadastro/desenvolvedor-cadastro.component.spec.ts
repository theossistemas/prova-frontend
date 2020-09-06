import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesenvolvedorCadastroComponent } from './desenvolvedor-cadastro.component';

describe('DesenvolvedorCadastroComponent', () => {
  let component: DesenvolvedorCadastroComponent;
  let fixture: ComponentFixture<DesenvolvedorCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesenvolvedorCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesenvolvedorCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
