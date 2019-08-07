import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scr6Component2Component } from './scr6-component2.component';

describe('Scr6Component2Component', () => {
  let component: Scr6Component2Component;
  let fixture: ComponentFixture<Scr6Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scr6Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scr6Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
