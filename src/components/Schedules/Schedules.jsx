import React from 'react';
import { FocusContext, useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { useTimeline } from '../../hooks/useTimeline';
import { TimesBar, ScheduleRow } from '..';
import { useXScroll } from '../../hooks/useScroll';

const Timeline = () => {
  const { timelinePos } = useTimeline();
  return (
    <div id="timeline" className='timeline' style={{ left:`${timelinePos}px` }}></div>
  )
}

const Schedules = ({ schedules }) => {

  const {scrollingRef, onAssetFocus} = useXScroll();
  const { ref, focusKey } = useFocusable();

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className="schedules-wrapper">
        <div ref={scrollingRef} className='schedules'>
          <TimesBar />
          <Timeline />
          {schedules.map((schedule, index) => (
            <ScheduleRow
              key={schedule.id}
              schedule={schedule}
              isFirstRow={index == 0 ? true : false}
              onFocus={onAssetFocus}
            />
          ))}
        </div>
      </div>
    </FocusContext.Provider>
  );
}

export default Schedules;