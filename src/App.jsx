import React from 'react';
import { Schedules, DatesBar } from './components';
import { useEpg } from './hooks/useEpg';

function App() {
  const { channels, schedules } = useEpg();

  return (
    <>
      <DatesBar />
      <div className='epg-container'>
        <div className="channel-list">
          {channels.map(channel => (
            <div key={channel.id} className="channel-container">
              <img src={channel.logo} alt="" />
            </div>
          ))}
        </div>
        <Schedules schedules={schedules} />
      </div>
    </>
  );
}

export default App;