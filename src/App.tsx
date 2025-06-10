import React, { useState, useEffect } from 'react';
import { SearchBar } from './components/SearchBar';
import { CurrentWeather } from './components/CurrentWeather';
import { HourlyForecast } from './components/HourlyForecast';
import { WeeklyForecast } from './components/WeeklyForecast';
import { WeatherDetails } from './components/WeatherDetails';
import { LoadingSpinner } from './components/LoadingSpinner';
import { WeatherBackground } from './components/WeatherBackground';
import { useWeatherData } from './hooks/useWeatherData';
import { useGeolocation } from './hooks/useGeolocation';

function App() {
  const [city, setCity] = useState('New York');
  const { location, error: locationError, getCurrentLocation } = useGeolocation();
  const { weatherData, isLoading, error } = useWeatherData(city, location);

  useEffect(() => {
    getCurrentLocation();
  }, [getCurrentLocation]);

  const handleSearch = (searchCity: string) => {
    setCity(searchCity);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 relative overflow-hidden">
      {/* Animated Weather Background */}
      {weatherData && <WeatherBackground weatherData={weatherData.current} />}
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 animate-fade-in">
            WeatherPro
          </h1>
          <p className="text-blue-100 text-lg animate-fade-in-delay">
            Your modern weather companion
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        {error && (
          <div className="max-w-md mx-auto mb-8 p-4 bg-red-500/20 backdrop-blur-sm rounded-xl border border-red-300/30 animate-shake">
            <p className="text-white text-center">{error}</p>
          </div>
        )}

        {weatherData && (
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Current Weather */}
            <CurrentWeather data={weatherData.current} location={city} />

            {/* Weather Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                {/* Hourly Forecast */}
                <HourlyForecast data={weatherData.hourly} />
                
                {/* Weekly Forecast */}
                <WeeklyForecast data={weatherData.weekly} />
              </div>
              
              {/* Weather Details */}
              <div className="lg:col-span-1">
                <WeatherDetails data={weatherData.details} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;