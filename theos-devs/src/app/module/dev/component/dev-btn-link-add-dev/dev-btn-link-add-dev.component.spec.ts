import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevBtnLinkAddDevComponent } from './dev-btn-link-add-dev.component';

describe('DevBtnLinkAddDevComponent', () => {
  let component: DevBtnLinkAddDevComponent;
  let fixture: ComponentFixture<DevBtnLinkAddDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevBtnLinkAddDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevBtnLinkAddDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
