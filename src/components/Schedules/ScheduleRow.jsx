import React from 'react';
import { ScheduleItem } from '..';

const ScheduleRow = ({schedule, isFirstRow, onFocus}) => {
  return (
    <div className="schedules-row">
      {schedule.programs?.map((program, index) => (
        <ScheduleItem
          key={index}
          program={program}
          isFirstRow={isFirstRow}
          onFocus={onFocus}
        />
      ))}
    </div>
  )
}

export default ScheduleRow;