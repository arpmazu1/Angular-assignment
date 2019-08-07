import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scr5Component2Component } from './scr5-component2.component';

describe('Scr5Component2Component', () => {
  let component: Scr5Component2Component;
  let fixture: ComponentFixture<Scr5Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scr5Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scr5Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
