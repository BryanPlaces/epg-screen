import React from 'react';
import { addDays, startOfToday, format } from 'date-fns';
import Slider from 'react-slick';

function DaysBar() {
  const today = startOfToday();
  const dates = [];
  
  for (let i = -10; i <= 10; i++) {
    const date = addDays(today, i);
    const formattedDate = format(date, 'EEE dd.MM.');
    dates.push(formattedDate);
  }

  // Renderiza el carrusel con las fechas
  return (
    <Slider>
      {dates.map((date, index) => (
        <div key={index}>{date}</div>
      ))}
    </Slider>
  );
}

export default DaysBar;