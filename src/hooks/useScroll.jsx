import { useRef, useCallback } from 'react';

export const useXScroll = () => {
  const scrollingRef = useRef(null);

  const onAssetFocus = useCallback(({ x }) => {
    console.log(x, 'asdas', scrollingRef)
    if (scrollingRef.current) {
      scrollingRef.current.scrollTo({
        left: x,
        behavior: 'smooth',
      });
    }
  }, [scrollingRef]);

  return { scrollingRef, onAssetFocus }
}
