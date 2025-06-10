import React from 'react';
import { Calendar } from 'lucide-react';
import { WeeklyWeatherData } from '../types/weather';
import { AnimatedWeatherIcon } from './AnimatedWeatherIcon';

interface WeeklyForecastProps {
  data: WeeklyWeatherData[];
}

export const WeeklyForecast: React.FC<WeeklyForecastProps> = ({ data }) => {
  return (
    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 animate-slide-up-delay-2">
      <div className="flex items-center mb-4">
        <Calendar className="w-5 h-5 text-white/80 mr-2" />
        <h3 className="text-lg font-semibold text-white">7-Day Forecast</h3>
      </div>
      
      <div className="space-y-3">
        {data.map((day, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 animate-fade-in-stagger"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="flex items-center space-x-4 flex-1">
              <p className="text-white font-medium w-20">{day.day}</p>
              <AnimatedWeatherIcon condition={day.condition} size={24} />
              <p className="text-white/80 capitalize flex-1">{day.description}</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-white/60 text-sm">{day.precipitation}% rain</p>
              </div>
              <div className="text-right min-w-[60px]">
                <span className="text-white font-semibold">{Math.round(day.high)}°</span>
                <span className="text-white/60 ml-2">{Math.round(day.low)}°</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};