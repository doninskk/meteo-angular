import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { DataService } from '../services/data.service';
import { WeatherData, SunriseSunsetData } from '../model/luogo.model';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css'],
})
export class DettaglioComponent implements OnInit {
  
  sunriseSunsetData: SunriseSunsetData | undefined;
  weatherData: WeatherData | undefined;

  constructor(private route: ActivatedRoute, private apiService: ApiService, public dataService: DataService) {}

  ngOnInit(): void {
    // Recupera le coordinate dalla route
    const lat: string = this.route.snapshot.params['lat'];
    const lon: string = this.route.snapshot.params['lon'];
    

    // Esegue le chiamate API con le coordinate convertite in stringhe
    this.apiService.getSunriseSunset(lat, lon).subscribe(
      (sunriseSunsetData: SunriseSunsetData) => {
        this.dataService.sunriseSunsetData = sunriseSunsetData;
      },
      (error) => {
        console.error('Sunrise/Sunset API Error:', error);
      }
    );

    this.apiService.getWeather(lat, lon).subscribe(
      (weatherData: WeatherData) => {
        this.dataService.weatherData = weatherData;
      },
      (error) => {
        console.error('Weather Data API Error:', error);
      }
    );
  }
}
