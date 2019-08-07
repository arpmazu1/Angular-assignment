import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  // variable
  public message="";
  constructor() { }

  ngOnInit() {
  }

   //  method to fetch the user input
  onClick(value){
    this.message= value;

  }

}
