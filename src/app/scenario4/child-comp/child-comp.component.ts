import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {
  //  to fetch data from parent to child using eventemitter
  @Output() public childEvent= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
   //  to fetch data from parent to child
  onClick(value){
    this.childEvent.emit(value);
  }

}
