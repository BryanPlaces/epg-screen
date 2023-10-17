import { fetchChannels } from '../services/channels';
import { useState, useEffect, useCallback } from 'react';

export function useEpg() {
  const [channels, setChannels] = useState([]);
  const [schedules, setSchedules] = useState([]);
  useEffect(() => {
    getChannels();
  }, []);

  const getChannels = useCallback(async () => {
    const {channels, schedules} = await fetchChannels();
    setChannels(channels);
    setSchedules(schedules);
  }, []);

  return { channels, schedules }
}