import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scr6-component2',
  templateUrl: './scr6-component2.component.html',
  styleUrls: ['./scr6-component2.component.css']
})
export class Scr6Component2Component implements OnInit {
   // event emitter to transfer for parent to child
  @Output() childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
   // method to emit value
  onClick(value){
    this.childEvent.emit(value);
  }

}
