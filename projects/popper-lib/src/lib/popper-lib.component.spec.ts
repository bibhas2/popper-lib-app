import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopperLibComponent } from './popper-lib.component';

describe('PopperLibComponent', () => {
  let component: PopperLibComponent;
  let fixture: ComponentFixture<PopperLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopperLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopperLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
