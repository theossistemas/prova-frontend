import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevListPageComponent } from './dev-list-page.component';

describe('DevListPageComponent', () => {
  let component: DevListPageComponent;
  let fixture: ComponentFixture<DevListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
