import React from 'react';
import { format } from "date-fns";
import { getTodayHours } from '../helpers/datetimeHelpers';

const TimesBar = () => {
  return (
    <div id="timeline" className="times-wrapper">
      {getTodayHours().map((hora, index) => (
        <div
          key={ index }
          className='times-scrolling-wrapper'
          style={{
            minWidth: "404px"
          }}
        >
          {format(hora, 'HH:mm')}
        </div>
      ))}
    </div>
  );
};

export default TimesBar;
