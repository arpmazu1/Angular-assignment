import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {
    // input in order to get data from parent to child
  @Input() public parentData;


  constructor() { }

  ngOnInit() {
  }


}
