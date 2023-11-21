import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { SunriseSunsetData } from '../model/luogo.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  lat: string = '';
  lon: string = '';
  sunriseSunset: SunriseSunsetData | undefined;

  constructor(
    private router: Router,
    public dataService: DataService,
    public apiService: ApiService
  ) {}

  selectLocation(lat: string, lon: string) {
    this.apiService.getSunriseSunset(lat, lon).subscribe((data: any) => {
      this.sunriseSunset = data as SunriseSunsetData;
    });
  }
}
