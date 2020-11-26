import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from './../app.module';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [
        AppModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should add other desenvolvedor', () => {
    expect(component.desenvolvedores.length).toBe(2);
    component.addNewDesenvolvedor({nome: 'Seraphine'});
    expect(component.desenvolvedores.length).toBe(3);
  });
});
