import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop helper component
 * Resets the window scroll position to (0,0) whenever the route pathname changes.
 * This ensures that navigating to /booking or /enquiry starts at the top of the page.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}
