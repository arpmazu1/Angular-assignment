import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scr5Component3Component } from './scr5-component3.component';

describe('Scr5Component3Component', () => {
  let component: Scr5Component3Component;
  let fixture: ComponentFixture<Scr5Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scr5Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scr5Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
