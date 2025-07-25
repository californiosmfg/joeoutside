"use client";
export const dynamic = 'force-dynamic';
import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

// --- Simulated Site Content Data ---
const siteContent = [
  { path: '/', title: 'Home', content: "joe outside homepage welcome outdoor guides tips expert source go outside don't have to featured guides ready explore contact us" },
  { path: '/info', title: 'About Us', content: 'about joe outside mission philosophy approach welcome trusted companion navigating great outdoors seasoned trekker adventure reliable practical inspiration journey research planning preparation knowledge safe enjoyable experience benefit spending time nature accessible intimidating empower individuals confidence skills explore responsibly joyfully go-to resource clear concise dependable information worry experiencing practical advice real-world meticulous tested firsthand break down complex easy-to-understand steps safety sustainability maximizing enjoyment fluff essentials in-depth guides actionable tips honest gear reviews inspiring content' },
  { path: '/contact', title: 'Contact', content: 'contact get in touch information have question suggestion need help guides fill form reach out details below aim respond business days location outdoor trail adventure city email us address message name subject send' },
  { path: '/guides', title: 'Guides', content: 'guides placeholder page under construction outdoor hiking camping survival skills' },
  { path: '/tips', title: 'Tips & Tricks', content: 'tips tricks placeholder page under construction outdoor quick advice hacks knowledge common challenges' },
  { path: '/gear-reviews', title: 'Gear Reviews', content: 'reviews of outdoor equipment tents backpacks boots stoves ultralight camp stove hiking boots' },
  { path: '/gear-reviews/ultralight-tent', title: 'Ultralight Backpacking Tent', content: 'lightweight two person tent review fastpacking thru-hiking quick setup single trekking pole' },
  { path: '/gear-reviews/hiking-boots', title: 'All-Terrain Hiking Boots', content: 'durable waterproof hiking boots traction rocky trails wet conditions review' },
  { path: '/gear-reviews/camp-stove', title: 'Compact Camp Stove', content: 'versatile backpacking camp stove boils water quickly wide burner fuel efficient review' },
  { path: '/newsletter', title: 'Newsletter', content: 'newsletter placeholder page under construction sign up updates' },
];

// Helper to highlight terms
const highlightText = (text, query) => {
  if (!query) return text;
  const terms = query.toLowerCase().split(' ').filter(Boolean);
  if (terms.length === 0) return text;
  const pattern = new RegExp(`(${terms.join('|')})`, 'gi');
  const parts = text.split(pattern);
  return parts.map((part, idx) =>
    terms.some(t => part.toLowerCase() === t) ? (
      <strong key={idx} className="font-bold text-[#A13C20]">{part}</strong>
    ) : (
      part
    )
  );
};

function SearchResultsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState([]);
  const [localQuery, setLocalQuery] = useState(query);

  useEffect(() => {
    setLocalQuery(query);
  }, [query]);

  useEffect(() => {
    if (query) {
      const searchTerms = query.toLowerCase().split(' ').filter(Boolean);
      if (searchTerms.length > 0) {
        const filtered = siteContent.filter(p => {
          const lower = p.content.toLowerCase();
          return searchTerms.every(t => lower.includes(t));
        });
        setResults(filtered);
      } else {
        setResults([]);
      }
    } else {
      setResults([]);
    }
  }, [query]);

  const handleLocalQueryChange = e => setLocalQuery(e.target.value);
  const handlePageSearchSubmit = e => {
    e.preventDefault();
    const newQ = localQuery.trim();
    if (newQ) {
      router.push(`/search?q=${encodeURIComponent(newQ)}`);
    } else {
      router.push('/search');
    }
  };

  return (
    <div className="bg-[#FEF8E7] min-h-[calc(100vh-136px)] py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#A13C20]">Search Results</h1>

        <form onSubmit={handlePageSearchSubmit} className="mb-8">
          <label htmlFor="page-search" className="sr-only">Search again</label>
          <input id="page-search" type="text" value={localQuery} onChange={handleLocalQueryChange} placeholder="Enter new search..." className="bg-white shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#A13C20]/60 focus:border-transparent placeholder-gray-500" />
        </form>

        {query ? (
          <div>
            <p className="text-lg text-gray-700 mb-6">Showing results for: <strong className="text-[#2A5041]">{query}</strong></p>
            {results.length > 0 ? (
              <ul className="space-y-4">
                {results.map(res => {
                  const snippet = res.content.substring(0, 150) + (res.content.length > 150 ? '...' : '');
                  return (
                    <li key={res.path} className="border-b border-gray-300 pb-4">
                      <Link href={res.path} legacyBehavior>
                        <a className="block hover:bg-gray-50/50 p-2 -m-2 rounded-md transition-colors">
                          <h3 className="text-xl font-semibold text-[#2A5041]">{res.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">{highlightText(snippet, query)}</p>
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="text-gray-600 italic">No pages found matching your search terms.</p>
            )}
          </div>
        ) : (
          <p className="text-lg text-gray-700">Please enter a search term.</p>
        )}
      </div>
    </div>
  );
}

export default function SearchResultsPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
      <SearchResultsContent />
    </Suspense>
  );
}
