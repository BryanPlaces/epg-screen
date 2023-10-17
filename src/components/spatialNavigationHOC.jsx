import React, { useCallback, useRef } from 'react';
import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';

export function withSpatialNavigation(Component) {
  return function WrappedComponent(props) {
    const { ref, focusKey } = useFocusable();
    const scrollingRef = useRef(null);

    const onAssetFocus = useCallback(({ x }) => {
      if (scrollingRef.current) {
        scrollingRef.current.scrollTo({
          left: x,
          behavior: 'smooth',
        });
      }
    }, [scrollingRef]);

    return (
      <Component {...props} innerRef={ref} scrollingRef={scrollingRef} focusKey={focusKey} onAssetFocus={onAssetFocus} />
    );
  };
}