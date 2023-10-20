import React, { useRef, useCallback } from 'react';
import { getDates } from '../helpers/datetimeHelpers';
import './../styles/datebar.scss';
import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';
import { useXScroll, useMouseXScroll } from '../hooks/useScroll';

const DateItem = ({ date, onFocus }) => {
  const { ref, focused } = useFocusable({ onFocus });
  return (
    <div ref={ref} className={focused ? 'date-item__focus' : 'date-item'}> { date } </div>
  )
};

const DatesBar = () => {
  const {scrollingRef, onAssetFocus} = useXScroll();
  const { handleMouseDown, handleMouseMove, handleMouseUp } = useMouseXScroll(scrollingRef);
  const { ref, focusKey } = useFocusable();

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className='dates-wrapper'>
        <div className='star-container'>
          <img src="/star.png" width={25} alt="" />
        </div>
        <div ref={scrollingRef} className='dates'
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {getDates().map((dateFormated, index) => (
            <DateItem key={index} date={dateFormated} onFocus={onAssetFocus} />
          ))}
        </div>
      </div>
    </FocusContext.Provider>
  )
};

export default DatesBar;