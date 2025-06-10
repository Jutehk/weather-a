import React from 'react';
import { Clock } from 'lucide-react';
import { HourlyWeatherData } from '../types/weather';
import { AnimatedWeatherIcon } from './AnimatedWeatherIcon';

interface HourlyForecastProps {
  data: HourlyWeatherData[];
}

export const HourlyForecast: React.FC<HourlyForecastProps> = ({ data }) => {
  return (
    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 animate-slide-up-delay">
      <div className="flex items-center mb-4">
        <Clock className="w-5 h-5 text-white/80 mr-2" />
        <h3 className="text-lg font-semibold text-white">24-Hour Forecast</h3>
      </div>
      
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {data.map((hour, index) => (
          <div
            key={index}
            className="flex-shrink-0 text-center p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 min-w-[80px] animate-fade-in-stagger"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <p className="text-white/70 text-sm mb-2">{hour.time}</p>
            <div className="flex justify-center mb-2">
              <AnimatedWeatherIcon condition={hour.condition} size={32} />
            </div>
            <p className="text-white font-semibold">{Math.round(hour.temperature)}°</p>
            <p className="text-white/60 text-xs mt-1">{hour.precipitation}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};