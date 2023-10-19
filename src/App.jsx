import React from 'react';
import { Schedules, DatesBar } from './components';
import { useEpg } from './hooks/useEpg';
import NowButton from './components/NowButton';
import { EpgProvider } from './context/epg';
import './styles/epgStyles.scss';

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

function App() {
  const { channels, schedules } = useEpg();

  return (
    <EpgProvider>
      <DatesBar />
      <NowButton />
      <div className='epg-wrapper'>
        <Channels channels={channels} />
        <Schedules schedules={schedules} />
      </div>
    </EpgProvider>
  );
}

export default App;