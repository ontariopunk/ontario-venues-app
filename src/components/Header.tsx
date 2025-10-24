import React from 'react';

const MusicNoteIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
        <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3V3z" />
    </svg>
);


const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-slate-800 shadow-md">
      <div className="container mx-auto px-4 py-4 md:px-8 flex items-center justify-center space-x-4">
        <MusicNoteIcon />
        <div>
            <h1 className="text-2xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">
            Ontario Music Venues
            </h1>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400">Your guide to live music hotspots</p>
        </div>
      </div>
    </header>
  );
};

export default Header;