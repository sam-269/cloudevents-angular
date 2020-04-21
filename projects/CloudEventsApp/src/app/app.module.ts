import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CloudEventsModule } from 'cloud-events';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CloudEventsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
