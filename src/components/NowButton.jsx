import React, { useContext } from 'react';
import { FocusContext, useFocusable, setFocus } from '@noriginmedia/norigin-spatial-navigation';
import { EpgContext } from '../context/epg';

const NowButton = () => {
  const { epgData } = useContext(EpgContext)

  const onEnter = () => {
    setFocus(epgData.refFirstScheduleLive);
  }

  const { ref, focused, focusKey } = useFocusable({
    onEnterPress: onEnter
  });

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className={`button-wrapper`}>
        <button onClick={onEnter} className={`now-button ${focused ? 'now-button__focus' : ''} `}>NOW</button>
      </div>
    </FocusContext.Provider>
  )
}

export default NowButton;