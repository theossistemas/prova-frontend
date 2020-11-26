import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from './../app.module';
import { CadastroDesenvolvedorComponent } from './cadastro-desenvolvedor.component';

describe('CadastroDesenvolvedorComponent', () => {
  let component: CadastroDesenvolvedorComponent;
  let fixture: ComponentFixture<CadastroDesenvolvedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroDesenvolvedorComponent ],
      imports: [
        AppModule
      ]
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

  it('should emit event', () => {

    let spy = spyOn(fixture.componentInstance.addNew, 'emit');
    fixture.componentInstance.onSave(); 
    expect(spy).toHaveBeenCalled();
  });
});
