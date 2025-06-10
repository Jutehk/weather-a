import { useState, useEffect } from 'react';
import { WeatherData } from '../types/weather';

export const useWeatherData = (city: string, location?: { lat: number; lon: number }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Mock weather data - in a real app, you'd call a weather API here
        const mockData: WeatherData = {
          current: {
            temperature: Math.random() * 15 + 15, // 15-30°C
            feelsLike: Math.random() * 15 + 15,
            condition: ['sunny', 'partly-cloudy', 'cloudy', 'rainy'][Math.floor(Math.random() * 4)],
            description: 'partly cloudy',
            high: Math.random() * 10 + 25,
            low: Math.random() * 10 + 10,
            date: new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })
          },
          hourly: Array.from({ length: 24 }, (_, i) => ({
            time: `${(i + 1).toString().padStart(2, '0')}:00`,
            temperature: Math.random() * 15 + 15,
            condition: ['sunny', 'partly-cloudy', 'cloudy', 'rainy'][Math.floor(Math.random() * 4)],
            precipitation: Math.floor(Math.random() * 100)
          })),
          weekly: Array.from({ length: 7 }, (_, i) => {
            const days = ['Today', 'Tomorrow', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
            return {
              day: days[i] || `Day ${i + 1}`,
              high: Math.random() * 10 + 20,
              low: Math.random() * 10 + 5,
              condition: ['sunny', 'partly-cloudy', 'cloudy', 'rainy'][Math.floor(Math.random() * 4)],
              description: 'partly cloudy',
              precipitation: Math.floor(Math.random() * 100)
            };
          }),
          details: {
            visibility: Math.floor(Math.random() * 20 + 5),
            humidity: Math.floor(Math.random() * 40 + 40),
            windSpeed: Math.floor(Math.random() * 30 + 5),
            pressure: Math.floor(Math.random() * 50 + 1000),
            uvIndex: Math.floor(Math.random() * 10 + 1),
            precipitation: Math.floor(Math.random() * 10),
            sunrise: '6:30 AM',
            sunset: '7:45 PM'
          }
        };

        setWeatherData(mockData);
      } catch (err) {
        setError('Failed to fetch weather data. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeatherData();
  }, [city, location]);

  return { weatherData, isLoading, error };
};