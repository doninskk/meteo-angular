import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { DataService } from '../services/data.service';
import { WeatherData, SunriseSunsetData } from '../model/luogo.model';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css'],
})
export class DettaglioComponent implements OnInit {
  weatherData: WeatherData[] = [];
  sunriseSunsetData: SunriseSunsetData | undefined;

  constructor(
    private apiService: ApiService,
    public dataService: DataService
  ) {}

  ngOnInit() {
    if (this.dataService.selectedLocation) {
      const lat = this.dataService.selectedLocation.lat;
      const lon = this.dataService.selectedLocation.lon;

      
      this.apiService.getSunriseSunset(lat, lon).subscribe(
        (data) => {
          this.sunriseSunsetData = data;
          console.log(lat)
          console.log(lon)
        }
        // (error) => {
        //   console.error('Sunrise/Sunset API Error:', error);
        // }
      );

      this.apiService.getWeather(lat, lon).subscribe(
        (data) => {
          this.weatherData = data;
        }
        // (error) => {
        //   console.error('Weather API Error:', error);
        // });
      );
    }
  }
}
