import React from 'react';
import { useRouter } from 'next/router'; // Changed from react-router-dom

function TipsPage() { // Renamed component
  // In Next.js, for a static page like /tips, the pathname is fixed.
  // We can hardcode the title or derive it if needed, but for simplicity:
  const pageName = "Tips";

  return (
    <div className="bg-[#FEF8E7] min-h-[calc(100vh-136px)] py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#A13C20]">
          {pageName} Under Construction
        </h1>
        <p className="text-lg text-gray-700">
          This page is coming soon. Check back later for exciting content!
        </p>
      </div>
    </div>
  );
}

export default TipsPage; 