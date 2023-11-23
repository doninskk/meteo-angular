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
  // Inizializza gli array per i dati meteo e i dati di alba e tramonto
  weatherData: WeatherData[] = [];
  sunriseSunsetData: SunriseSunsetData | undefined;

  constructor(
    private apiService: ApiService,
    public dataService: DataService
  ) {}

  ngOnInit() {
    // Controlla se è stata selezionata una posizione
    if (this.dataService.selectedLocation) {
      const lat = this.dataService.selectedLocation.lat;
      const lon = this.dataService.selectedLocation.lon;

      // Chiamata API per ottenere i dati di alba e tramonto
      this.apiService.getSunriseSunset(lat, lon).subscribe(
        (data) => {
          // Assegna i dati alla variabile di classe
          this.sunriseSunsetData = data;
          // Logga i dati ricevuti dalla chiamata API
          console.log('Sunrise/Sunset Data:', data);
        },
        (error) => {
          // Gestione degli errori per la chiamata API di alba e tramonto
          console.error('Sunrise/Sunset API Error:', error);
        }
      );

      // Chiamata API per ottenere i dati meteorologici
      this.apiService.getWeather(lat, lon).subscribe(
        (data) => {
          // Assegna i dati alla variabile di classe
          this.weatherData = data;
          // Logga i dati ricevuti dalla chiamata API
          console.log('Weather Data:', data);
        },
        (error) => {
          // Gestione degli errori per la chiamata API meteorologica
          console.error('Weather API Error:', error);
        });
    }
  }
}
