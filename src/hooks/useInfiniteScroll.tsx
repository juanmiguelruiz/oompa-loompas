import { useEffect, useRef } from 'react';

interface UseInfiniteScrollOptions {
  loading?: boolean;
  threshold?: number;
  rootMargin?: string;
}

export const useInfiniteScroll = (
  callback: () => void,
  { loading = false, threshold = 0.1, rootMargin = '20px' }: UseInfiniteScrollOptions = {}
) => {
  const observerTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !loading) {
          callback();
        }
      },
      {
        root: null,
        rootMargin,
        threshold,
      }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [callback, loading, rootMargin, threshold]);

  return observerTarget;
};
