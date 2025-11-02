import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * Scrolls to top of page on route changes and page refresh
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  const resetScrollPosition = () => {
    // Reset native window scroll
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Reset GSAP ScrollSmoother if it exists
    if (window.smoother && window.smoother.scrollTop) {
      try {
        // ScrollSmoother method to scroll to top
        window.smoother.scrollTop(0, true);
      } catch(e) {
        console.log('Could not reset ScrollSmoother:', e);
      }
    }
  };

  useEffect(() => {
    // Reset scroll when route changes
    resetScrollPosition();
    
    // Try again after a short delay in case GSAP isn't ready
    const timeout = setTimeout(resetScrollPosition, 100);
    return () => clearTimeout(timeout);
  }, [pathname]);

  useEffect(() => {
    // Reset scroll position on initial page load/refresh
    // This ensures even on hard refresh, we start at top
    resetScrollPosition();

    // Also run after delays to catch any late-loading content
    const timeout1 = setTimeout(resetScrollPosition, 50);
    const timeout2 = setTimeout(resetScrollPosition, 200);

    // Cleanup timeouts if component unmounts
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []); // Empty dependency array - runs once on mount

  return null;
}

export default ScrollToTop;

