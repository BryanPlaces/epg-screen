import React from 'react';
import { format } from "date-fns";
import { getTodayHours } from '../services/dates.jsx';

const TimesBar = () => {
  return (
    <div className="times-wrapper">
      {getTodayHours().map((hora, index) => (
        <div
          key={ index }
          className='times-scrolling-wrapper'
          style={{
            minWidth: "500px"
          }}
        >
          {format(hora, 'HH:mm')}
        </div>
      ))}
    </div>
  );
};

export default TimesBar;
