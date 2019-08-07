import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scr6Component1Component } from './scr6-component1.component';

describe('Scr6Component1Component', () => {
  let component: Scr6Component1Component;
  let fixture: ComponentFixture<Scr6Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scr6Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scr6Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
