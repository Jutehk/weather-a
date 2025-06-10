import React from 'react';
import { 
  Sun, 
  Cloud, 
  CloudRain, 
  CloudSnow, 
  CloudLightning,
  CloudDrizzle,
  Moon,
  CloudSun
} from 'lucide-react';

interface WeatherIconProps {
  condition: string;
  size?: number;
  className?: string;
}

export const WeatherIcon: React.FC<WeatherIconProps> = ({ 
  condition, 
  size = 24, 
  className = "text-white" 
}) => {
  const getIcon = () => {
    switch (condition.toLowerCase()) {
      case 'sunny':
      case 'clear':
        return <Sun size={size} className={className} />;
      case 'partly-cloudy':
        return <CloudSun size={size} className={className} />;
      case 'cloudy':
      case 'overcast':
        return <Cloud size={size} className={className} />;
      case 'rainy':
      case 'rain':
        return <CloudRain size={size} className={className} />;
      case 'drizzle':
        return <CloudDrizzle size={size} className={className} />;
      case 'snowy':
      case 'snow':
        return <CloudSnow size={size} className={className} />;
      case 'stormy':
      case 'thunderstorm':
        return <CloudLightning size={size} className={className} />;
      case 'night':
        return <Moon size={size} className={className} />;
      default:
        return <Sun size={size} className={className} />;
    }
  };

  return <div className="animate-pulse">{getIcon()}</div>;
};