import React, { useEffect, useCallback, useRef } from 'react';
import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';
import './../styles/datebar.scss';
import DateItem from './DateItem';
import { getDates } from '../services/dates.jsx';

const DatesBar = ({ focusKey: focusKeyParam }) => {
  const {
    ref,
    focusSelf,
    focusKey
  } = useFocusable({
    focusable: true,
    saveLastFocusedChild: false,
    trackChildren: true,
    autoRestoreFocus: true,
    isFocusBoundary: false,
    focusKey: focusKeyParam,
    preferredChildFocusKey: null,
    onEnterPress: () => {},
    onEnterRelease: () => {},
    onArrowPress: () => true,
    onFocus: () => {},
    onBlur: () => {},
  });

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  const scrollingRef = useRef(null);
  const onAssetFocus = useCallback(
    ({ x }) => {
      if (scrollingRef.current) {
        scrollingRef.current.scrollTo({
          left: x,
          behavior: 'smooth'
        });
      }
    },
    [scrollingRef]
  );

  return (
    <FocusContext.Provider value={focusKey}>
    <div ref={ref} className='dates-wrapper'>
      <div className='star-container'>
        <img src="/star.png" width={25} alt="" />
      </div>
      <div ref={scrollingRef} className='dates-scrolling-wrapper'>
        {getDates().map((dateFormated, index) => (
          <DateItem
            key={index}
            date={dateFormated}
            onFocus={onAssetFocus}
          />
        ))}
      </div>
    </div>
  </FocusContext.Provider>
  )
};

export default DatesBar;