import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDevsComponent } from './editar-devs.component';

describe('EditarDevsComponent', () => {
  let component: EditarDevsComponent;
  let fixture: ComponentFixture<EditarDevsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarDevsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarDevsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
