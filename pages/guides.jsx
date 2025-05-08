/*global process*/
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

// --- Placeholder Guide Data with Coordinates ---
const guidesData = [
  {
    id: 'hike-yosemite',
    title: 'Hiking Yosemite Valley Loop',
    description: 'A scenic loop trail exploring waterfalls and granite cliffs in Yosemite.',
    keywords: 'hiking yosemite valley waterfall easy scenic',
    lat: 37.7450,
    lng: -119.5937 // Approx. Yosemite Valley
  },
  {
    id: 'camp-big-sur',
    title: 'Camping Guide to Big Sur',
    description: 'Tips for finding campsites and enjoying the coastal redwood forests of Big Sur.',
    keywords: 'camping big sur california coast redwood forest campsites',
    lat: 36.2704,
    lng: -121.8081 // Approx. Big Sur
  },
  {
    id: 'survival-basics',
    title: 'Basic Survival Skills',
    description: 'Essential skills for unexpected situations outdoors, including shelter and fire.',
    keywords: 'survival skills basic essential shelter fire safety wilderness',
    lat: 34.0522,
    lng: -118.2437 // Placeholder (Los Angeles)
  },
  {
    id: 'gear-backpacking-101',
    title: 'Backpacking Gear Essentials',
    description: "A beginner's guide to choosing the right backpack, tent, and sleeping bag.",
    keywords: 'gear backpacking essentials beginner tent sleeping bag backpack review',
    lat: 39.5296,
    lng: -119.8138 // Placeholder (Reno - near Sierras)
  },
];
// ---------------------------------------------

function GuidesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  // Filter guides based on search query (case-insensitive)
  const filteredGuides = useMemo(() => {
    const queryLower = searchQuery.toLowerCase().trim();
    if (!queryLower) {
      return guidesData; // Show all if query is empty
    }
    return guidesData.filter(guide => 
      guide.title.toLowerCase().includes(queryLower) || 
      guide.description.toLowerCase().includes(queryLower) ||
      guide.keywords.toLowerCase().includes(queryLower)
    );
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  if (!apiKey) {
    return (
      <div className="bg-[#FEF8E7] min-h-[calc(100vh-136px)] py-12 md:py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center text-red-600 bg-red-100 p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Configuration Error</h1>
          <p>Google Maps API Key is missing. Please check your .env file.</p>
          <p className="mt-2 text-sm">Ensure NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is set.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FEF8E7] min-h-[calc(100vh-136px)] py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl"> {/* Wider container */}
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-[#A13C20]">
          Where to?
        </h1>

        {/* Search Bar */}
        <div className="mb-10 max-w-xl mx-auto">
          <label htmlFor="guide-search" className="sr-only">Search Guides</label>
          <input
            id="guide-search"
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search guides by title, keyword, or description..."
            className="bg-white shadow-md appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#A13C20]/60 focus:border-transparent placeholder-gray-500"
          />
        </div>

        {/* Guides List */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl font-semibold text-[#2A5041] mb-6 border-b border-[#A13C20]/30 pb-2">Available Guides</h2>
          {filteredGuides.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGuides.map(guide => (
                <Link 
                  key={guide.id} 
                  href={`/guides/${guide.id}`}
                  legacyBehavior
                >
                  <a className="block bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                    <h3 className="font-bold text-xl mb-2 text-[#2A5041]">{guide.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{guide.description}</p>
                  </a>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 italic text-center py-8">
              No guides found matching your search.
            </p>
          )}
        </div>

        {/* Map Section */}
        <div>
          <h2 className="text-2xl font-semibold text-[#2A5041] mb-6 border-b border-[#A13C20]/30 pb-2">Explore Locations</h2>
           <APIProvider apiKey={apiKey}>
             <div className="h-96 w-full rounded-lg shadow-md overflow-hidden mt-6">
                <Map
                  defaultCenter={{ lat: 36.7783, lng: -119.4179 }} // Centered on California
                  defaultZoom={6}
                  mapId="JOE_OUTSIDE_MAP"
                  gestureHandling={'greedy'}
                  disableDefaultUI={true}
                >
                  {/* Loop through guidesData and render a Marker for each */}
                  {guidesData.map((guide) => (
                    <Marker
                      key={guide.id}
                      position={{ lat: guide.lat, lng: guide.lng }}
                      title={guide.title} // Add title for hover tooltip
                      // We can add onClick handlers later
                    />
                  ))}
                </Map>
             </div>
           </APIProvider>
        </div>

      </div>
    </div>
  );
}

export default GuidesPage; 