import React from 'react';
import { MapPin, Thermometer } from 'lucide-react';
import { CurrentWeatherData } from '../types/weather';
import { AnimatedWeatherIcon } from './AnimatedWeatherIcon';

interface CurrentWeatherProps {
  data: CurrentWeatherData;
  location: string;
}

export const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data, location }) => {
  return (
    <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-2xl animate-slide-up">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Location and Temperature */}
        <div className="text-center lg:text-left mb-6 lg:mb-0">
          <div className="flex items-center justify-center lg:justify-start mb-2">
            <MapPin className="w-5 h-5 text-white/80 mr-2 animate-pulse" />
            <h2 className="text-2xl font-semibold text-white">{location}</h2>
          </div>
          <p className="text-white/70 mb-4">{data.date}</p>
          
          <div className="flex items-center justify-center lg:justify-start space-x-4">
            <div className="text-6xl lg:text-7xl font-bold text-white animate-number-count">
              {Math.round(data.temperature)}°
            </div>
            <div className="text-left">
              <p className="text-white/80 text-lg capitalize">{data.description}</p>
              <p className="text-white/60">Feels like {Math.round(data.feelsLike)}°</p>
            </div>
          </div>
        </div>

        {/* Weather Icon */}
        <div className="flex flex-col items-center">
          <AnimatedWeatherIcon condition={data.condition} size={120} />
          <div className="mt-4 text-center">
            <p className="text-white/80 text-sm">
              H: {Math.round(data.high)}° L: {Math.round(data.low)}°
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};