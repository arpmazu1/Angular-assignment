import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scr6Component3Component } from './scr6-component3.component';

describe('Scr6Component3Component', () => {
  let component: Scr6Component3Component;
  let fixture: ComponentFixture<Scr6Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scr6Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scr6Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
