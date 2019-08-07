import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scr5-component3',
  templateUrl: './scr5-component3.component.html',
  styleUrls: ['./scr5-component3.component.css']
})
export class Scr5Component3Component implements OnInit {
 // event emitter to trasfer from child to parent
  @Output() public childEvent= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
    // method to emit value
  onClick(value){
    this.childEvent.emit(value);

  }

}
