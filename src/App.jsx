import React, { useEffect, useState, useCallback, useRef } from 'react';
import DaysBar from "./components/DaysBar";
function formatTimeRange(startDate, endDate) {
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

function App() {
  const [channels, setChannels] = useState([]);
  const [time, setTime] = useState();
  const epgRef = useRef();

  const handleDaySelect = useCallback((time) => {
    if (!epgRef.current) return;
    epgRef.current.scrollToTimeAndFocus(time);
  }, []);


  useEffect(() => {
    fetch(`http://localhost:1337/epg`)
    .then(res => res.json())
    .then(data => {
      setChannels(data.channels);
    });
  }, []);
  return (
    <div className="epg-container">
      <DaysBar />
      {/* <div className="channel-list">
        {channels.map(channel => (
          <div key={channel.id} className="channel">
            <h2>{channel.title}</h2>
          </div>
        ))}
      </div>
      <div className="program-list">
        {channels.map(channel => (
          <div key={channel.id} className="channel-programs">
            {channel.schedules.map((program, index) => (
              <div key={index} className="program">
                <span>{program.title}</span>
                <span>{ formatTimeRange(program.start, program.end) }</span>
              </div>
            ))}
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default App;