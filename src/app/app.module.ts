import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


// noinspection AngularInvalidEntryComponent
@NgModule({
  bootstrap: [AppComponent],
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: []
})
export class AppModule { }
