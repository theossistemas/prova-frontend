import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevFormSearchComponent } from './dev-form-search.component';

describe('DevFormSearchComponent', () => {
  let component: DevFormSearchComponent;
  let fixture: ComponentFixture<DevFormSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevFormSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevFormSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
