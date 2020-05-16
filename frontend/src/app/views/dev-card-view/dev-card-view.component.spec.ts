import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevCardViewComponent } from './dev-card-view.component';

describe('DevCardViewComponent', () => {
  let component: DevCardViewComponent;
  let fixture: ComponentFixture<DevCardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevCardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
