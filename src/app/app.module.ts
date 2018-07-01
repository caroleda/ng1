import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarolCommponentComponent } from './carol-commponent/carol-commponent.component';
import { FeetComponent } from './feet/feet.component';

@NgModule({
  declarations: [
    AppComponent,
    CarolCommponentComponent,
    FeetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
