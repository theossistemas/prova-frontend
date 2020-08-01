import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevEditPageComponent } from './dev-edit-page.component';

describe('DevEditPageComponent', () => {
  let component: DevEditPageComponent;
  let fixture: ComponentFixture<DevEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
