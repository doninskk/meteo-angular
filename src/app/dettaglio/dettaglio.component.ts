import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { DataService } from '../services/data.service';
import { WeatherData, SunriseSunsetData } from '../model/luogo.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css'],
})
export class DettaglioComponent implements OnInit {
  currentLocation = { latitude: '', longitude: '' };
  sunriseSunsetData: SunriseSunsetData | undefined;
  weatherData: WeatherData | undefined;
  paramsSub: Subscription | undefined;
  httpSub: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    public dataService: DataService
  ) {}

  ngOnInit(): void {
    this.paramsSub = this.route.params.subscribe((params) => {
      const lat: string = params['lat'];
      const lon: string = params['lon'];

      this.apiService.getSunriseSunset(lat, lon).subscribe((data: any) => {
        this.sunriseSunsetData = data;
        console.log(data);
      });

      //   this.apiService.getWeather(lat, lon).subscribe((data: WeatherData) => {
      //     this.weatherData = data;
      //   });
    });
  }
}
