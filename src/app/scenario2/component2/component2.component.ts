import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  //  variable in order to print the user input in the template
  public name="";

  constructor() { }

  ngOnInit() {
  }

}
