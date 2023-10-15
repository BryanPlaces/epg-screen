import React from 'react';
import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';

const DateItem = ({ date, onFocus }) => {
  const { ref, focused } = useFocusable({
    //onEnterPress,
    onFocus,
  });

  return (
    <div ref={ref} className={focused ? 'date-item__focus' : 'date-item'}>
      { date }
    </div>
  )

};

export default DateItem;