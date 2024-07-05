import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}
  searchWeatherByCity(city:string):Observable<any>{
  return this.http.get(`http://api.weatherapi.com/v1/current.json?key=427e9cfce0354fab97582357240407&q=${city}`);

  }
}
