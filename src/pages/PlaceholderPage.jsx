import React from 'react';
import { useLocation } from 'react-router-dom';

function PlaceholderPage() {
  const location = useLocation();
  // Extract page name from pathname (e.g., /gear-reviews -> Gear Reviews)
  const pageName = location.pathname
    .substring(1) // Remove leading slash
    .replace(/-/g, ' ') // Replace dashes with spaces
    .replace(/\b\w/g, l => l.toUpperCase()); // Capitalize first letter of each word

  return (
    <div className="bg-[#FEF8E7] min-h-[calc(100vh-136px)] py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#A13C20]">
          {pageName || 'Page'} Under Construction
        </h1>
        <p className="text-lg text-gray-700">
          This page is coming soon. Check back later for exciting content!
        </p>
      </div>
    </div>
  );
}

export default PlaceholderPage; 