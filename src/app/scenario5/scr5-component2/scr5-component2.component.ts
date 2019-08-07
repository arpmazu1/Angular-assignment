import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-scr5-component2',
  templateUrl: './scr5-component2.component.html',
  styleUrls: ['./scr5-component2.component.css']
})
export class Scr5Component2Component implements OnInit {
    // event emitter in order to trasfer data from child to parent
  @Output() childEvent=new EventEmitter()

  constructor() { }

  ngOnInit() {
  }
   // method to to emit text
  onEvent($value)
  {
    this.childEvent.emit($value);

  }

}
