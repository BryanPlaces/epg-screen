import { useState, useEffect, useCallback } from 'react';
import { calculateTimelinePosition } from '../helpers/datetimeHelpers';
export function useTimelinePosition() {
  const [timelinePos, setTimelinePos] = useState();

  useEffect(() => {
    const initialPosition = calculateTimelinePosition();
    setTimelinePos(initialPosition);

    const interval = setInterval(getTimelinePosition, 60000);
    return () => {
      clearInterval(interval);
    }
  }, []);

  const getTimelinePosition = useCallback(() => {
    const pixelsPosition = calculateTimelinePosition();
    setTimelinePos(pixelsPosition);
  }, []);

  return { timelinePos }
}