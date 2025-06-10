import React from 'react';
import { CurrentWeatherData } from '../types/weather';

interface WeatherBackgroundProps {
  weatherData: CurrentWeatherData;
}

export const WeatherBackground: React.FC<WeatherBackgroundProps> = ({ weatherData }) => {
  const isRainy = weatherData.condition.toLowerCase().includes('rain') || 
                  weatherData.condition.toLowerCase().includes('drizzle') ||
                  weatherData.condition.toLowerCase().includes('storm');
  
  const isCloudy = weatherData.condition.toLowerCase().includes('cloud') ||
                   weatherData.condition.toLowerCase().includes('overcast');

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Moving Clouds */}
      {(isCloudy || isRainy) && (
        <>
          {/* Large clouds */}
          <div className="absolute top-10 left-0 w-32 h-20 bg-white/10 rounded-full animate-float-slow transform -translate-x-16">
            <div className="absolute top-2 left-8 w-20 h-16 bg-white/15 rounded-full"></div>
            <div className="absolute top-4 right-4 w-16 h-12 bg-white/10 rounded-full"></div>
          </div>
          
          <div className="absolute top-20 right-0 w-40 h-24 bg-white/8 rounded-full animate-float-medium transform translate-x-20">
            <div className="absolute top-3 left-6 w-24 h-18 bg-white/12 rounded-full"></div>
            <div className="absolute top-6 right-6 w-20 h-14 bg-white/8 rounded-full"></div>
          </div>
          
          <div className="absolute top-32 left-1/4 w-28 h-18 bg-white/12 rounded-full animate-float-fast">
            <div className="absolute top-1 left-4 w-18 h-14 bg-white/16 rounded-full"></div>
            <div className="absolute top-3 right-2 w-14 h-10 bg-white/10 rounded-full"></div>
          </div>
          
          {/* Medium clouds */}
          <div className="absolute top-48 right-1/3 w-24 h-16 bg-white/6 rounded-full animate-float-slow-reverse">
            <div className="absolute top-2 left-4 w-16 h-12 bg-white/10 rounded-full"></div>
          </div>
          
          <div className="absolute top-64 left-1/2 w-36 h-22 bg-white/8 rounded-full animate-float-medium-reverse">
            <div className="absolute top-2 left-8 w-22 h-16 bg-white/12 rounded-full"></div>
            <div className="absolute top-4 right-4 w-18 h-14 bg-white/8 rounded-full"></div>
          </div>
        </>
      )}

      {/* Rain Animation */}
      {isRainy && (
        <div className="absolute inset-0">
          {/* Rain drops */}
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-8 bg-gradient-to-b from-white/40 to-transparent animate-rain"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${0.5 + Math.random() * 0.5}s`
              }}
            />
          ))}
          
          {/* Heavy rain effect */}
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={`heavy-${i}`}
              className="absolute w-0.5 h-12 bg-gradient-to-b from-white/30 to-transparent animate-rain-heavy"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 1.5}s`,
                animationDuration: `${0.3 + Math.random() * 0.4}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Snow Animation (for snowy conditions) */}
      {weatherData.condition.toLowerCase().includes('snow') && (
        <div className="absolute inset-0">
          {Array.from({ length: 80 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/80 rounded-full animate-snow"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Lightning Effect (for stormy conditions) */}
      {weatherData.condition.toLowerCase().includes('storm') && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white/20 animate-lightning opacity-0"></div>
        </div>
      )}
    </div>
  );
};