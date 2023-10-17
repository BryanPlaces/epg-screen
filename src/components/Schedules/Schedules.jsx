import React, { useRef } from 'react';
import { FocusContext } from '@noriginmedia/norigin-spatial-navigation';
import { useTimelinePosition } from '../../hooks/useTimelinePosition';
import { withSpatialNavigation } from '../spatialNavigationHOC';
import { TimesBar, ScheduleItem } from '..';

const Schedules = ({ innerRef, scrollingRef, onAssetFocus, focusKey, schedules }) => {
  const { timelinePos } = useTimelinePosition();
  const firstLiveRef = useRef(false);

  const isFirstLive = () => {
    if (!firstLiveRef.current) {
      firstLiveRef.current = true;
      return true;
    }
    return false;
  };

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={innerRef} className="program-list">
        <div ref={scrollingRef} id='container-id' className='program-test'>
          <div id="algo" className='algo' style={{ left:`${timelinePos}px` }}></div>
        <TimesBar />
          {schedules.map(schedule => (
            <div key={schedule.id} className="channel-programs">
              {schedule.programs?.map((program, index) => {
                return (
                  <ScheduleItem key={index} program={program} isFirstLive={isFirstLive} onFocus={onAssetFocus}/>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </FocusContext.Provider>
  );
}

export default withSpatialNavigation(Schedules);