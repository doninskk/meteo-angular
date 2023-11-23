import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  selectedLocation: { lat: string; lon: string;} | undefined;
  weatherData: any;
  sunriseSunsetData: any;
}
