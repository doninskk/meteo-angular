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

  constructor(
    private router: Router,
    private dataService: DataService,
  ) {}

  selectLocation() {
    console.log()
    if (this.lat !== undefined && this.lon !== undefined) {
      this.dataService.selectedLocation = { lat: this.lat, lon: this.lon };
      this.router.navigate(['/dettaglio']);
    }
    else {
      alert('Please enter both latitude and longitude.');
    }
  }


  selectCity(city: string) {
    if (city == "Torino") {
      this.dataService.selectedLocation = { lat: '45.069641423101714', lon: '7.680643277670245' };
      this.router.navigate(['/dettaglio']);
    }else if(city == "Seoul"){
      this.dataService.selectedLocation = { lat: '37.532600', lon: '127.024612' };
      this.router.navigate(['/dettaglio']);
    }else if(city == "New York"){
      this.dataService.selectedLocation = { lat: '40.730610', lon: '-73.935242' };
      this.router.navigate(['/dettaglio']);
    }
    else {
      alert('Latitudine e Longitudine non presenti.');
    }
  }

}
