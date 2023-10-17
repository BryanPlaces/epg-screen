import React, { useEffect } from 'react';
import { formatTimeRange, getProgramTimeData } from '../../helpers/datetimeHelpers';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { useScheduleStatus } from '../../hooks/useScheduleStatus';

const ScheduleItem = ({program, isFirstLive, onFocus}) => {
  const programWidth = getProgramTimeData(program.start, program.end);
  const { scheduleStatus } = useScheduleStatus(program.start, program.end);
  const { ref, focused, focusSelf } = useFocusable({ onFocus });

  useEffect(() => {
    if (scheduleStatus && isFirstLive()) {
      focusSelf();
    }
  }, []);

  return (
    <div ref={ref} className={`program ${focused ? 'program__focus' : ''}`}
      style={{
        minWidth:`${programWidth}px`,
        maxWidth:`${programWidth}px`,
        backgroundColor:`${scheduleStatus? '#393939':'#111111'}`
      }}
    >
      <div className='program-item'>
        <span>{program.title}</span>
        <span>{ formatTimeRange(program.start, program.end) }</span>
      </div>
    </div>
  )
}

export default ScheduleItem;