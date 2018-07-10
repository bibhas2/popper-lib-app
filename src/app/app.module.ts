import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PopperLibModule } from 'popper-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PopperLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
