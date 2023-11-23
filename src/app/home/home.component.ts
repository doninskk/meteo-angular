import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  lat: string = '';
  lon: string = '';

  constructor(private router: Router, private dataService: DataService) {}

  // Funzione chiamata quando si preme il pulsante "Cerca"
  selectLocation() {
    // Controlla se le coordinate sono definite
    if (this.lat !== undefined && this.lon !== undefined) {
      // Imposta le coordinate nel servizio di dati
      this.dataService.selectedLocation = { lat: this.lat, lon: this.lon };
      // Naviga alla pagina di dettaglio
      this.router.navigate(['/dettaglio']);
    } else {
      // Se le coordinate non sono definite, mostra un messaggio di avviso
      alert('Inserire entrambe la latitudine e la longitudine.');
    }
  }

  // Funzione chiamata quando si seleziona una città dalla lista
  selectCity(city: string) {
    // Imposta le coordinate in base alla città selezionata
    if (city == 'Torino') {
      this.dataService.selectedLocation = { lat: '45.069641423101714', lon: '7.680643277670245' };
    } else if (city == 'Seoul') {
      this.dataService.selectedLocation = { lat: '37.532600', lon: '127.024612' };
    } else if (city == 'New York') {
      this.dataService.selectedLocation = { lat: '40.730610', lon: '-73.935242' };
    } else {
      // Se la città non è riconosciuta, mostra un messaggio di avviso
      alert('Latitudine e Longitudine non presenti per la città selezionata.');
    }
  }
}
