import { useContext, useEffect, useState } from 'react';
import { isScheduleLive } from '../helpers/datetimeHelpers';
import { EpgContext } from '../context/epg';

export const useIsliveNow = (start, end, isFirstRow, focusSelf, focusKey) => {
  const [isliveNow, setIsliveNow] = useState(isScheduleLive(start, end));
  const { setEpgData } = useContext(EpgContext);

  useEffect(() => {
    if (isliveNow && isFirstRow) {
      focusSelf();
    }

    const interval = setInterval(() => {
      const newLiveStatus = isScheduleLive(start, end);
      setIsliveNow(newLiveStatus);
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (isliveNow && isFirstRow) {
      setEpgData({refFirstScheduleLive: focusKey})
    }
  }, [isliveNow])

  return { isliveNow }
}