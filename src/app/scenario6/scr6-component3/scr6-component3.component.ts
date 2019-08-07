import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scr6-component3',
  templateUrl: './scr6-component3.component.html',
  styleUrls: ['./scr6-component3.component.css']
})
export class Scr6Component3Component implements OnInit {
    // trasfer from parent to child
  @Input() public parentData;
  constructor() { }

  ngOnInit() {
  }

}
