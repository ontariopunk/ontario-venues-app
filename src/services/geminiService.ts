import { Venue } from '../types';

const fetchVenuesInOntario = async (): Promise<Venue[]> => {
  try {
    const response = await fetch('/.netlify/functions/getVenues');

    if (!response.ok) {
        const errorData = await response.json();
        console.error('Error from serverless function:', errorData);
        throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const venues: Venue[] = await response.json();
    
    return venues.sort((a, b) => a.name.localeCompare(b.name));

  } catch (error) {
    console.error("Failed to fetch venues:", error);
    throw new Error("Could not fetch the list of venues from the server.");
  }
};

export { fetchVenuesInOntario };
