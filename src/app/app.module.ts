import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { EventdemoComponent } from './eventdemo/eventdemo.component';
import { Interpolationdemo1Component } from './interpolationdemo1/interpolationdemo1.component';
import { PropertydemoComponent } from './propertydemo/propertydemo.component';
import { TwowaydemoComponent } from './twowaydemo/twowaydemo.component';

@NgModule({
  declarations: [
    AppComponent,
    EventdemoComponent,
    Interpolationdemo1Component,
    PropertydemoComponent,
    TwowaydemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
