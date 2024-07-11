import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDevsComponent } from './list-devs.component';

describe('ListDevsComponent', () => {
  let component: ListDevsComponent;
  let fixture: ComponentFixture<ListDevsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDevsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDevsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
