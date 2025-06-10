export interface CurrentWeatherData {
  temperature: number;
  feelsLike: number;
  condition: string;
  description: string;
  high: number;
  low: number;
  date: string;
}

export interface HourlyWeatherData {
  time: string;
  temperature: number;
  condition: string;
  precipitation: number;
}

export interface WeeklyWeatherData {
  day: string;
  high: number;
  low: number;
  condition: string;
  description: string;
  precipitation: number;
}

export interface WeatherDetailsData {
  visibility: number;
  humidity: number;
  windSpeed: number;
  pressure: number;
  uvIndex: number;
  precipitation: number;
  sunrise: string;
  sunset: string;
}

export interface WeatherData {
  current: CurrentWeatherData;
  hourly: HourlyWeatherData[];
  weekly: WeeklyWeatherData[];
  details: WeatherDetailsData;
}