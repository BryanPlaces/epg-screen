import React, { useState } from 'react';
import { FocusContext, useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { useTimeline } from '../../hooks/useTimeline';
import { useEpg } from '../../hooks/useEpg';
import { TimesBar, ScheduleRow } from '..';
import { useMouseXScroll, useMouseYScroll, useXScroll } from '../../hooks/useScroll';

const Timeline = () => {
  const { timelinePos } = useTimeline();
  return (
    <div id="timeline" className='timeline'  style={{ left:`${timelinePos}px` }}></div>
  )
}

const Channels = ({ channels }) => {
  return (
    <div className="channels-wrapper">
      {channels.map(channel => (
        <div key={channel.id} className="channel">
          <img src={channel.logo} alt="Channel logo" />
        </div>
      ))}
    </div>
  )
}

const Schedules = () => {
  const { channels, schedules } = useEpg();
  const { scrollingRef, onAssetFocus } = useXScroll();
  const { ref, focusKey } = useFocusable();
  const { handleMouseDown, handleMouseMove, handleMouseUp } = useMouseXScroll(scrollingRef);

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className='epg-wrapper'>
        <Channels channels={channels} />

          <div ref={scrollingRef} className='schedules'
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
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