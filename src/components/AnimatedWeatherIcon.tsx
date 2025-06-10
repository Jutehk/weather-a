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

interface AnimatedWeatherIconProps {
  condition: string;
  size?: number;
  className?: string;
}

export const AnimatedWeatherIcon: React.FC<AnimatedWeatherIconProps> = ({ 
  condition, 
  size = 24, 
  className = "text-white" 
}) => {
  const getAnimatedIcon = () => {
    const baseClasses = `${className} transition-all duration-300`;
    
    switch (condition.toLowerCase()) {
      case 'sunny':
      case 'clear':
        return (
          <div className="relative">
            <Sun size={size} className={`${baseClasses} animate-spin-slow`} />
            <div className="absolute inset-0 animate-pulse">
              <Sun size={size} className={`${baseClasses} opacity-30`} />
            </div>
          </div>
        );
      
      case 'partly-cloudy':
        return (
          <div className="relative">
            <CloudSun size={size} className={`${baseClasses} animate-float`} />
          </div>
        );
      
      case 'cloudy':
      case 'overcast':
        return (
          <div className="relative">
            <Cloud size={size} className={`${baseClasses} animate-float-slow`} />
            <div className="absolute inset-0 animate-float-medium opacity-60">
              <Cloud size={size * 0.7} className={baseClasses} />
            </div>
          </div>
        );
      
      case 'rainy':
      case 'rain':
        return (
          <div className="relative">
            <CloudRain size={size} className={`${baseClasses} animate-bounce-gentle`} />
            {/* Animated rain drops */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-3 bg-blue-300 animate-rain-drop opacity-70"
                  style={{
                    left: `${(i - 1) * 4}px`,
                    animationDelay: `${i * 0.2}s`
                  }}
                />
              ))}
            </div>
          </div>
        );
      
      case 'drizzle':
        return (
          <div className="relative">
            <CloudDrizzle size={size} className={`${baseClasses} animate-bounce-gentle`} />
            <div className="absolute top-full left-1/2 transform -translate-x-1/2">
              {Array.from({ length: 2 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-2 bg-blue-200 animate-rain-drop opacity-50"
                  style={{
                    left: `${(i - 0.5) * 3}px`,
                    animationDelay: `${i * 0.3}s`
                  }}
                />
              ))}
            </div>
          </div>
        );
      
      case 'snowy':
      case 'snow':
        return (
          <div className="relative">
            <CloudSnow size={size} className={`${baseClasses} animate-float`} />
            <div className="absolute top-full left-1/2 transform -translate-x-1/2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-snow-fall opacity-80"
                  style={{
                    left: `${(i - 1.5) * 3}px`,
                    animationDelay: `${i * 0.4}s`
                  }}
                />
              ))}
            </div>
          </div>
        );
      
      case 'stormy':
      case 'thunderstorm':
        return (
          <div className="relative">
            <CloudLightning size={size} className={`${baseClasses} animate-shake`} />
            <div className="absolute inset-0 animate-lightning-flash opacity-0">
              <CloudLightning size={size} className="text-yellow-300" />
            </div>
          </div>
        );
      
      case 'night':
        return (
          <div className="relative">
            <Moon size={size} className={`${baseClasses} animate-glow`} />
          </div>
        );
      
      default:
        return <Sun size={size} className={`${baseClasses} animate-spin-slow`} />;
    }
  };

  return <div className="relative">{getAnimatedIcon()}</div>;
};