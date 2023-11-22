import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { WeatherData, SunriseSunsetData } from '../model/luogo.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getSunriseSunset(lat: string, lon: string) {
    const url = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lon}`;
    return this.http.get(url).pipe(
      map((response: any) => {
        return response.results as SunriseSunsetData;
      })
    );
  }

  getWeather(lat: string, lon: string) {
    const url = `https://www.7timer.info/bin/astro.php?lon=${lon}&lat=${lat}&ac=0&unit=metric&output=json&tzshift=0`;
    return this.http.get(url).pipe(
      map((response: any) => {
        return response.dataseries as WeatherData[];
      })
    );
  }
}
