import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const closeResourcesTimeoutRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSearchOpen) {
      searchInputRef.current?.focus();
    }
  }, [isSearchOpen]);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
        setSearchQuery('');
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter' && searchQuery.trim() !== '') {
      e.preventDefault();
      const query = searchQuery.trim();
      setIsSearchOpen(false);
      setSearchQuery('');
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const handleResourcesMouseEnter = () => {
    clearTimeout(closeResourcesTimeoutRef.current);
    setIsResourcesOpen(true);
  };

  const handleResourcesMouseLeave = () => {
    closeResourcesTimeoutRef.current = setTimeout(() => {
      setIsResourcesOpen(false);
    }, 150);
  };

  return (
    <nav className="w-full bg-[#2A5041] text-[#FEF8E7] py-4 shadow-md">
      <div className="container mx-auto flex justify-end items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center"> 
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-lg font-medium nav-link-hover">Home</Link>
            <Link to="/info" className="text-lg font-medium nav-link-hover">Info</Link>
            
            <div 
              className="relative" 
              onMouseEnter={handleResourcesMouseEnter} 
              onMouseLeave={handleResourcesMouseLeave}
            >
              <span className="text-lg font-medium nav-link-hover cursor-default">
                Resources
              </span>
              {isResourcesOpen && (
                <div 
                  className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
                  onMouseEnter={handleResourcesMouseEnter}
                  onMouseLeave={handleResourcesMouseLeave}
                >
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link to="/guides" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Guides</Link>
                    <Link to="/tips" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Tips & Tricks</Link>
                    <Link to="/gear-reviews" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Gear Reviews</Link>
                    <Link to="/newsletter" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Newsletter</Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/contact" className="text-lg font-medium nav-link-hover">Contact</Link>
          </div>
          
          <div className="flex items-center space-x-2 ml-6">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={handleSearchSubmit}
              className={`bg-[#FEF8E7] text-[#2A5041] placeholder-gray-500 rounded-md px-3 py-1 text-sm transition-all duration-300 ease-in-out outline-none focus:ring-2 focus:ring-[#A13C20]/70 ${isSearchOpen ? 'w-48 opacity-100' : 'w-0 opacity-0 pointer-events-none'}`}
            />
            <button 
              onClick={toggleSearch}
              className="p-1 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#2A5041] focus:ring-white rounded-full"
              aria-label="Toggle search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 