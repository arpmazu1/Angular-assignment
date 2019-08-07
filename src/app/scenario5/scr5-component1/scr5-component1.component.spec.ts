import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scr5Component1Component } from './scr5-component1.component';

describe('Scr5Component1Component', () => {
  let component: Scr5Component1Component;
  let fixture: ComponentFixture<Scr5Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scr5Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scr5Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
