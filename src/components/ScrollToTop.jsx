"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top whenever the pathname changes
    // Next.js Link component often handles this, but this provides an explicit override
    // or handles cases where Link's scroll behavior might be disabled or different.
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component doesn't render anything itself
  return null; 
}

export default ScrollToTop; 