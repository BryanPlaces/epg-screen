import React, { useEffect, useState } from 'react';
import { addDays, startOfToday, format } from 'date-fns';
import Slider from 'react-slick';

function DaysBar() {
  const today = startOfToday();
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const datesG = [];
    for (let i = -10; i <= 10; i++) {
      const date = addDays(today, i);
      const formattedDate = format(date, 'EEE dd.MM.');
      datesG.push(formattedDate);
    }
    setDates(datesG);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  // Renderiza el carrusel con las fechas
  return (
    <>
      {/* <Slider>
        {dates.map((date, index) => (
          <div key={index}>{date} asdasd</div>
        ))}
      </Slider> */}

      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>


    </>
  );
}

export default DaysBar;