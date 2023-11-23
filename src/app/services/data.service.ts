import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class DataService {
  // Variabile che contiene le coordinate della posizione selezionata
  selectedLocation: { lat: string; lon: string; } | undefined;
  // Variabile per memorizzare i dati meteorologici
  weatherData: any;
  // Variabile per memorizzare i dati di alba e tramonto
  sunriseSunsetData: any;
}

