import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-scr6-component1',
  templateUrl: './scr6-component1.component.html',
  styleUrls: ['./scr6-component1.component.css']
})
export class Scr6Component1Component implements OnInit {
//variable
  public message="";
  // to tranfer data from parent to child
  @Output() childEvent=new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
    // method to fetch data
  onEvent($value)
  {
    this.childEvent.emit($value);
    this.message=$value;
  }
}
