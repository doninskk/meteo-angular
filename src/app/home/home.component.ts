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

  selectLocation() {
    if (this.lat !== undefined && this.lon !== undefined) {
      this.dataService.selectedLocation = { lat: this.lat, lon: this.lon };
      this.router.navigate(['/dettaglio']);
    } else {
      alert('Please enter both latitude and longitude.');
    }
  }
}
