import React from 'react';
import { Schedules, DatesBar } from './components';
import NowButton from './components/NowButton';
import { EpgProvider } from './context/epg';
import './styles/epgStyles.scss';

function App() {
  return (
    <EpgProvider>
      <DatesBar />
      <NowButton />
      <Schedules />
    </EpgProvider>
  );
}

export default App;