import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDesenvolvedorComponent } from './cadastro-desenvolvedor.component';

describe('CadastroDesenvolvedorComponent', () => {
  let component: CadastroDesenvolvedorComponent;
  let fixture: ComponentFixture<CadastroDesenvolvedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroDesenvolvedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDesenvolvedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
