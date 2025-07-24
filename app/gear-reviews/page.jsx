"use client";
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { gearReviews } from './data';

export default function GearReviewsPage() {
  const [query, setQuery] = useState('');

  const filteredGear = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return gearReviews;
    return gearReviews.filter(g => g.name.toLowerCase().includes(q) || g.summary.toLowerCase().includes(q));
  }, [query]);

  const handleChange = e => setQuery(e.target.value);

  return (
    <div className="bg-[#FEF8E7] min-h-[calc(100vh-136px)] py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-[#A13C20]">Gear Reviews</h1>
        <div className="mb-8 max-w-md mx-auto">
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search gear..."
            className="bg-white shadow-md border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#A13C20]/60 placeholder-gray-500"
          />
        </div>
        {filteredGear.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredGear.map(g => (
              <Link key={g.id} href={`/gear-reviews/${g.id}`} legacyBehavior>
                <a className="block bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h2 className="font-bold text-2xl mb-2 text-[#2A5041]">{g.name}</h2>
                  <p className="text-gray-600">{g.summary}</p>
                </a>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No gear matched your search.</p>
        )}
      </div>
    </div>
  );
}
