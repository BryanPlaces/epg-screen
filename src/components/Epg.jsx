import React from 'react';
import channelsMapped from "../mocks/channels.json";
import schedulesMapped from "../mocks/programs.json";
import { formatTimeRange, getProgramTimeData } from '../services/dates';
import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';
import Programs from './Programs';

export default function Epg() {
  const channels = channelsMapped.channels;

  return (
    <div className='epg-container'>
      <div className="channel-list">
        {channels.map(channel => (
          <div key={channel.id} className="channel-container">
            <img src={channel.images.logo} alt="" />
          </div>
        ))}
      </div>
      <Programs />
    </div>
  )
}
