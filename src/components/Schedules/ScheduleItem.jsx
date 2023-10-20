import React from 'react';
import { formatTimeRange } from '../../helpers/datetimeHelpers';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { useIsliveNow } from '../../hooks/useIsliveNow';

const ScheduleItem = ({program, isFirstRow, onFocus}) => {
  const { ref, focused, focusSelf, focusKey } = useFocusable({ onFocus });
  const { isliveNow } = useIsliveNow(
    program.start,
    program.end,
    isFirstRow,
    focusSelf,
    focusKey
  );

  return (
    <div ref={ref} style={{
      minWidth: program.width,
      maxWidth: program.width,
      height: '110px'
    }}>
      <div id={focusKey} className={`schedule-wrapper ${focused ? 'schedule-wrapper__focus' : ''}`}
        style={{ backgroundColor:`${isliveNow? '#393939':'#111111'}` }}
      >
        <div className='schedule'>
          <span>{program.title}</span>
          <span>{ formatTimeRange(program.start, program.end) }</span>
        </div>
      </div>

    </div>
  )
}

export default ScheduleItem;