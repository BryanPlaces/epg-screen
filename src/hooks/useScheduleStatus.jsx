import { useEffect, useState } from 'react';
import { isScheduleLive } from '../helpers/datetimeHelpers';

export const useScheduleStatus = (start, end) => {
  const [scheduleStatus, setScheduleStatus] = useState(isScheduleLive(start, end));

  useEffect(() => {
    const interval = setInterval(() => {
      const newLiveStatus = isScheduleLive(start, end);
      setScheduleStatus(newLiveStatus);
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return { scheduleStatus }
}