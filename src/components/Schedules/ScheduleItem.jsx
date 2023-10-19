import React, { useState } from 'react';
import { formatTimeRange, getProgramTimeData } from '../../helpers/datetimeHelpers';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { useIsliveNow } from '../../hooks/useIsliveNow';

const ScheduleItem = ({program, isFirstRow, onFocus}) => {
  const [programWidth] = useState(getProgramTimeData(program.start, program.end));
  const { ref, focused, focusSelf, focusKey } = useFocusable({
    onFocus,
  });
  const { isliveNow } = useIsliveNow(
    program.start,
    program.end,
    isFirstRow,
    focusSelf,
    focusKey
  );

  return (
    <div id={focusKey} ref={ref} className={`schedule-wrapper ${focused ? 'schedule-wrapper__focus' : ''}`}
      style={{
        minWidth:`${programWidth}px`,
        backgroundColor:`${isliveNow? '#393939':'#111111'}`
      }}
    >
      <div className='schedule'>
        <span>{program.title}</span>
        <span>{ formatTimeRange(program.start, program.end) }</span>
      </div>
    </div>
  )
}

export default ScheduleItem;