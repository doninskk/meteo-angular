export interface WeatherData {
    timepoint: number;
    temp2m: number;
  }
  
  export interface SunriseSunsetData {
    sunrise: string;
    sunset: string;
    first_light: number,
    last_light: number,
    dawn: number,
    dusk: number,
    solar_noon: number,
    golden_hour: number,
    day_length: number,
    timezone: string,
    utc_offset: number
  }