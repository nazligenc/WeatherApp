import {Component, Injectable, NgModule} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {DecimalPipe, NgIf} from "@angular/common";
import {WeatherService} from "./service/weather.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgIf, DecimalPipe, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})

export class AppComponent {
  weather: any;
  city: string = 'Istanbul';
  isDayTime: boolean = true;
  searchForm!: FormGroup;

  constructor(private fb: FormBuilder, private service: WeatherService) {

  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      city: [this.city, Validators.required]
    })
    this.searchWeather();
  }


  searchWeather() {
    this.city = this.searchForm.get('city')?.value;
    if (this.city) {
      this.service.searchWeatherByCity(this.city).subscribe((res) => {
        console.log(res);
        this.weather = res;
        const localtime = this.weather.location.localtime;
        const hour = new Date(localtime).getHours();
        this.isDayTime = hour >= 6 && hour < 18;

      });
    }

  }


}
