import React from 'react';
import { Cloud } from 'lucide-react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <Cloud className="w-16 h-16 text-white animate-bounce mx-auto" />
          <div className="absolute inset-0 w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto"></div>
        </div>
        <h2 className="text-2xl font-semibold text-white mb-2">Loading Weather Data</h2>
        <p className="text-white/70">Getting the latest forecast for you...</p>
      </div>
    </div>
  );
};