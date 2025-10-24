import React, { useState, useEffect, useCallback } from 'react';
import { Venue } from './types';
import { fetchVenuesInOntario } from './services/geminiService';
import Header from './components/Header';
import VenueCard from './components/VenueCard';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [venues, setVenues] = useState<Venue[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadVenues = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const fetchedVenues = await fetchVenuesInOntario();
      setVenues(fetchedVenues);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch music venues. The model may be busy. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadVenues();
  }, [loadVenues]);

  return (
    <div className="min-h-screen flex flex-col text-slate-800 dark:text-slate-200">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-8">
        {isLoading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} onRetry={loadVenues} />}
        {!isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {venues.map((venue, index) => (
              <VenueCard key={`${venue.name}-${index}`} venue={venue} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
