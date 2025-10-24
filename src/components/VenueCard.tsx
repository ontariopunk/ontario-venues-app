import React from 'react';
import { Venue } from '../types';

interface VenueCardProps {
  venue: Venue;
}

const MapPinIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-slate-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
);

const UsersIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-slate-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
    </svg>
);


const VenueCard: React.FC<VenueCardProps> = ({ venue }) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      <h2 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">{venue.name}</h2>
      {venue.capacity > 0 && (
          <div className="flex items-center text-slate-600 dark:text-slate-400 text-sm mb-4">
              <UsersIcon />
              <span>Capacity: {venue.capacity.toLocaleString()}</span>
          </div>
      )}
      <div className="flex items-start mt-auto">
        <MapPinIcon />
        <p className="text-slate-600 dark:text-slate-400 text-sm">{venue.address}</p>
      </div>
    </div>
  );
};

export default VenueCard;
