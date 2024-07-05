import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


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
    HttpClientModule,




  ],
  providers: []
})
export class AppModule { }
