import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDevsComponent } from './cadastro-devs.component';

describe('CadastroDevsComponent', () => {
  let component: CadastroDevsComponent;
  let fixture: ComponentFixture<CadastroDevsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroDevsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroDevsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
