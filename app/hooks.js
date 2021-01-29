import { useState, useEffect } from 'react';

export default function useRouteChange(router, onRouteComplete) {
  const [routeChanging, setRouteChanging] = useState(false);

  const startRouteChange = () => setRouteChanging(true);
  const stopRouteChange = () => {
    setRouteChanging(false);
    onRouteComplete();
  };

  useEffect(() => {
    router.events.on('routeChangeStart', startRouteChange);
    router.events.on('routeChangeComplete', stopRouteChange);
    return () => {
      router.events.off('routeChangeStart', startRouteChange);
      router.events.off('routeChangeComplete', stopRouteChange);
    };
  }, [router]);

  return routeChanging;
}
