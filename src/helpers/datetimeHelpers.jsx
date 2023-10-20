import {
  format,
  startOfToday,
  startOfDay,
  endOfDay,
  addDays,
  eachHourOfInterval,
  isWithinInterval,
  parse,
  parseISO,
  differenceInMinutes,
} from 'date-fns';

const WIDTH_TIMEBAR = 300;

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

  const formattedHours = todayHours.map((hour) => format(hour, 'HH:mm'));
  return formattedHours
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

/**
 * This function calculates the size of the Schedule, considering
 * the size of each timebar, which is 400px by default.
 * @param {*} start
 * @param {*} end
 * @returns
 */
export const getScheduleSize = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const minutesDifference = differenceInMinutes(endDate, startDate);
  const pixelsPerMinute = WIDTH_TIMEBAR / 60;
  const scheduleWidth = Math.round(minutesDifference * pixelsPerMinute);
  return scheduleWidth;
}

export const isScheduleLive = (start, end) => {
  const now = new Date();
  const startTime = parseISO(start);
  const endTime = parseISO(end);
  const isLive = isWithinInterval(now, { start: startTime, end: endTime })
  return isLive;
}

/**
 * This function calculates the number of pixels to move to the left in order to display
 * the timeline at the current time and represent it on the EPG. The result of this
 * function is used to position the timeline at the current time in the EPG interface.
 */
export const calculateTimelinePosition = () => {
  const currentTime = new Date();
  const startTime = parse('00:00', 'HH:mm', new Date());
  const minutesDifference = differenceInMinutes(currentTime, startTime);
  const intervalMinutes = 60;
  return ((minutesDifference / intervalMinutes) * WIDTH_TIMEBAR);
}