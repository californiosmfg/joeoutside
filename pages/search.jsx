"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

// --- Simulated Site Content Data ---
// (In a real app, this would come from an API or search index)
const siteContent = [
  { 
    path: '/', 
    title: 'Home', 
    content: 'joe outside homepage welcome outdoor guides tips expert source go outside don\'t have to featured guides ready explore contact us' 
  },
  { 
    path: '/info', 
    title: 'About Us', 
    content: 'about joe outside mission philosophy approach welcome trusted companion navigating great outdoors seasoned trekker adventure reliable practical inspiration journey research planning preparation knowledge safe enjoyable experience benefit spending time nature accessible intimidating empower individuals confidence skills explore responsibly joyfully go-to resource clear concise dependable information worry experiencing practical advice real-world meticulous tested firsthand break down complex easy-to-understand steps safety sustainability maximizing enjoyment fluff essentials in-depth guides actionable tips honest gear reviews inspiring content' 
  },
  { 
    path: '/contact', 
    title: 'Contact', 
    content: 'contact get in touch information have question suggestion need help guides fill form reach out details below aim respond business days location outdoor trail adventure city email us address message name subject send' 
  },
  { path: '/guides', title: 'Guides', content: 'guides placeholder page under construction outdoor hiking camping survival skills' }, 
  { path: '/tips', title: 'Tips & Tricks', content: 'tips tricks placeholder page under construction outdoor quick advice hacks knowledge common challenges' }, 
  { path: '/gear-reviews', title: 'Gear Reviews', content: 'gear reviews placeholder page under construction outdoor equipment unbiased assessments tents backpacks boots stoves' }, 
  { path: '/newsletter', title: 'Newsletter', content: 'newsletter placeholder page under construction sign up updates' },
];
// -------------------------------------

// Helper function to highlight search terms
const highlightText = (text, query) => {
  if (!query) {
    return text;
  }
  const terms = query.toLowerCase().split(' ').filter(Boolean);
  if (terms.length === 0) {
    return text;
  }
  // Create a regex pattern to match any of the terms, case-insensitive
  // Escape special regex characters in terms if necessary (simplified here)
  const pattern = new RegExp(`(${terms.join('|')})`, 'gi');
  const parts = text.split(pattern);

  return parts.map((part, index) => 
    terms.some(term => part.toLowerCase() === term) ? (
      // Matched term
      <strong key={index} className="font-bold text-[#A13C20]">
        {part}
      </strong>
    ) : (
      // Non-matching part
      part
    )
  );
};

function SearchResultsPage() {
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
      const searchTerms = query.toLowerCase().split(' ').filter(term => term);
      
      if (searchTerms.length > 0) {
        const filteredResults = siteContent.filter(page => {
          const pageContentLower = page.content.toLowerCase();
          // Check if ALL search terms are included in the page content
          return searchTerms.every(term => pageContentLower.includes(term));
        });
        setResults(filteredResults);
      } else {
        setResults([]); // Clear results if query is empty after splitting
      }
    } else {
      setResults([]); // Clear results if no query
    }
  }, [query]); // Re-run search when the query parameter changes

  const handleLocalQueryChange = (e) => {
    setLocalQuery(e.target.value);
  };

  const handlePageSearchSubmit = (e) => {
    e.preventDefault();
    const newQuery = localQuery.trim();
    if (newQuery) {
      router.push(`/search?q=${encodeURIComponent(newQuery)}`);
    } else {
      router.push('/search');
    }
  };

  return (
    <div className="bg-[#FEF8E7] min-h-[calc(100vh-136px)] py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#A13C20]">
          Search Results
        </h1>

        <form onSubmit={handlePageSearchSubmit} className="mb-8">
          <label htmlFor="page-search" className="sr-only">Search again</label>
          <input
            id="page-search"
            type="text"
            value={localQuery}
            onChange={handleLocalQueryChange}
            placeholder="Enter new search..."
            className="bg-white shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#A13C20]/60 focus:border-transparent placeholder-gray-500"
          />
        </form>

        {query ? (
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Showing results for: <strong className="text-[#2A5041]">{query}</strong>
            </p>
            
            {results.length > 0 ? (
              <ul className="space-y-4">
                {results.map(result => {
                  const snippet = result.content.substring(0, 150) + (result.content.length > 150 ? '...' : '');
                  return (
                    <li key={result.path} className="border-b border-gray-300 pb-4">
                      <Link 
                        href={result.path}
                        legacyBehavior
                      >
                        <a className="block hover:bg-gray-50/50 p-2 -m-2 rounded-md transition-colors">
                          <h3 className="text-xl font-semibold text-[#2A5041]">
                            {result.title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {highlightText(snippet, query)}
                          </p>
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="text-gray-600 italic">
                No pages found matching your search terms.
              </p>
            )}
          </div>
        ) : (
          <p className="text-lg text-gray-700">
            Please enter a search term.
          </p>
        )}
      </div>
    </div>
  );
}

export default SearchResultsPage; 