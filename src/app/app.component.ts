import {Component, Injectable, NgModule} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormBuilder, FormsModule} from "@angular/forms";
import {DecimalPipe, NgIf} from "@angular/common";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgIf, DecimalPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
 constructor(private fb:FormBuilder) {
 }


}



