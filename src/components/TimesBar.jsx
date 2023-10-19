import React from 'react';
import { getTodayHours } from '../helpers/datetimeHelpers';

const TimesBar = () => {
  return (
    <div id="times" className="times-wrapper">
      { getTodayHours().map((hour, index) => (
        <div key={ index } style={{ minWidth: "404px" }} >
          { hour }
        </div>
      ))}
    </div>
  );
};

export default TimesBar;
