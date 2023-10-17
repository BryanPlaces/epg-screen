import React from 'react';
import { getDates } from '../helpers/datetimeHelpers';
import { withSpatialNavigation } from './spatialNavigationHOC';
import './../styles/datebar.scss';
import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';

const DateItem = ({ date, onFocus }) => {
  const { ref, focused } = useFocusable({ onFocus });
  return (
    <div ref={ref} className={focused ? 'date-item__focus' : 'date-item'}> { date } </div>
  )
};

const DatesBar = ({ innerRef, scrollingRef, onAssetFocus, focusKey }) => {
  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={innerRef} className='dates-wrapper'>
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

export default withSpatialNavigation(DatesBar);