import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './scenario1/component1/component1.component';
import { Component2Component } from './scenario2/component2/component2.component';
import { Component3Component } from './scenario3/component3/component3.component';
import { Component4Component } from './scenario3/component4/component4.component';
import { ParentCompComponent } from './scenario4/parent-comp/parent-comp.component';
import { ChildCompComponent } from './scenario4/child-comp/child-comp.component';
import { Scr5Component1Component } from './scenario5/scr5-component1/scr5-component1.component';
import { Scr5Component2Component } from './scenario5/scr5-component2/scr5-component2.component';
import { Scr5Component3Component } from './scenario5/scr5-component3/scr5-component3.component';
import { Scr6Component1Component } from './scenario6/scr6-component1/scr6-component1.component';
import { Scr6Component2Component } from './scenario6/scr6-component2/scr6-component2.component';
import { Scr6Component3Component } from './scenario6/scr6-component3/scr6-component3.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    Component4Component,
    ParentCompComponent,
    ChildCompComponent,
    Scr5Component1Component,
    Scr5Component2Component,
    Scr5Component3Component,
    Scr6Component1Component,
    Scr6Component2Component,
    Scr6Component3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
