import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  selectedLocation: { lat: number; lon: number; } | undefined ;
  weatherData: any;
  sunriseSunsetData: any;
}
