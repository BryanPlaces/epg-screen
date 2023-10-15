import React, { useRef, useCallback } from 'react';
import { formatTimeRange, getProgramTimeData } from '../services/dates';
import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';
import schedulesMapped from "../mocks/programs.json";
import TimesBar from './TimesBar';

function ProgramItem({program, onFocus}) {
  const { programWidth, isLive } = getProgramTimeData(program.start, program.end);
  const { ref, focused } = useFocusable({
    onFocus
  });

  return (
      <div
        ref={ref}
        className={`program ${focused ? 'program__focus' : ''}`}
        style={{
          minWidth:`${programWidth}px`,
          maxWidth:`${programWidth}px`,
          backgroundColor:`${isLive? '#393939':'#111111'}`
        }}
      >
        <div className='program-item'>
          <span>{program.title}</span>
          <span>{ formatTimeRange(program.start, program.end) }</span>
        </div>
      </div>
  )
}

export default function Programs() {
  const schedules = schedulesMapped.schedules;
  const { ref, focusKey } = useFocusable({
    focusKey: 'TEST'
  });

  const scrollingRef = useRef(null);
  const onAssetFocus = useCallback(
    ({ x }) => {
      if (scrollingRef.current) {
        console.log(scrollingRef.current, x)
        scrollingRef.current.scrollTo({
          left: x,
          behavior: 'smooth'
        });
      }
    },
    [scrollingRef]
  );

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className="program-list">
        <div ref={scrollingRef} className='program-test'>
        <TimesBar />
          {schedules.map(schedule => (
            <div key={schedule.id} className="channel-programs">
              {schedule.programs.map((program, index) => (
                <ProgramItem key={index} program={program} onFocus={onAssetFocus}/>
              ))}
            </div>
          ))}
        </div>
      </div>
    </FocusContext.Provider>
  );
}