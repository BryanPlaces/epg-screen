import {
  addDays,
  startOfToday,
  format,
  startOfDay,
  endOfDay,
  eachHourOfInterval,
  parseISO,
  differenceInMilliseconds,
  isWithinInterval
} from 'date-fns';

export const getDates = () => {
  const dates = [];
  const today = startOfToday();

  for (let i = -10; i <= 10; i++) {
    const date = addDays(today, i);
    const formattedDate = format(date, 'EEE dd.MM.');
    dates.push(formattedDate);
  }

  return dates;
}

export const getTodayHours = () => {
  const startDate = startOfDay(new Date());
  const endDate = endOfDay(new Date());

  const todayHours = eachHourOfInterval({
    start: startDate,
    end: endDate,
  });

  return todayHours
}

export const formatTimeRange = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const startHour = start.getHours();
  const startMinute = start.getMinutes();
  const endHour = end.getHours();
  const endMinute = end.getMinutes();

  const formattedStartTime = `${startHour.toString().padStart(2, '0')}:${startMinute.toString().padStart(2, '0')}`;
  const formattedEndTime = `${endHour.toString().padStart(2, '0')}:${endMinute.toString().padStart(2, '0')}`;

  return `${formattedStartTime} - ${formattedEndTime}`;
}

export const getProgramTimeData = (start, end) => {
  const startTime = parseISO(start);
  const endTime = parseISO(end);
  const now = new Date();
  const totalTime = 60 * 60 * 1000; // 1 hora en milisegundos
  const timeRange = differenceInMilliseconds(endTime, startTime);
  const isLive = isWithinInterval(now, { start: startTime, end: endTime })
  const programWidth = ((timeRange / totalTime) * 500).toFixed(3);
  return {programWidth, isLive}

}
