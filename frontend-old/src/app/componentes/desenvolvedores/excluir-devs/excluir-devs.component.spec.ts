import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirDevsComponent } from './excluir-devs.component';

describe('ExcluirDevsComponent', () => {
  let component: ExcluirDevsComponent;
  let fixture: ComponentFixture<ExcluirDevsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcluirDevsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirDevsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
