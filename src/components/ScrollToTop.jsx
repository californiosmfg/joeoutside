import { useEffect } from 'react';
import { useRouter } from 'next/router';

function ScrollToTop() {
  const router = useRouter();
  const { pathname } = router;

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