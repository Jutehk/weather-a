import React from 'react';
import { 
  Eye, 
  Droplets, 
  Wind, 
  Gauge, 
  Sunrise, 
  Sunset,
  Thermometer,
  CloudRain
} from 'lucide-react';
import { WeatherDetailsData } from '../types/weather';

interface WeatherDetailsProps {
  data: WeatherDetailsData;
}

export const WeatherDetails: React.FC<WeatherDetailsProps> = ({ data }) => {
  const details = [
    {
      icon: Eye,
      label: 'Visibility',
      value: `${data.visibility} km`,
      color: 'text-blue-300'
    },
    {
      icon: Droplets,
      label: 'Humidity',
      value: `${data.humidity}%`,
      color: 'text-cyan-300'
    },
    {
      icon: Wind,
      label: 'Wind Speed',
      value: `${data.windSpeed} km/h`,
      color: 'text-green-300'
    },
    {
      icon: Gauge,
      label: 'Pressure',
      value: `${data.pressure} hPa`,
      color: 'text-purple-300'
    },
    {
      icon: Thermometer,
      label: 'UV Index',
      value: data.uvIndex.toString(),
      color: 'text-orange-300'
    },
    {
      icon: CloudRain,
      label: 'Precipitation',
      value: `${data.precipitation} mm`,
      color: 'text-indigo-300'
    },
    {
      icon: Sunrise,
      label: 'Sunrise',
      value: data.sunrise,
      color: 'text-yellow-300'
    },
    {
      icon: Sunset,
      label: 'Sunset',
      value: data.sunset,
      color: 'text-red-300'
    }
  ];

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
      <h3 className="text-lg font-semibold text-white mb-6">Weather Details</h3>
      
      <div className="grid grid-cols-1 gap-4">
        {details.map((detail, index) => {
          const Icon = detail.icon;
          return (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center space-x-3">
                <Icon className={`w-5 h-5 ${detail.color}`} />
                <span className="text-white/80">{detail.label}</span>
              </div>
              <span className="text-white font-semibold">{detail.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};