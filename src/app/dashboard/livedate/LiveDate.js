import React, { useEffect, useState } from 'react';
import './livedate.css';

function LiveDate() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(currentTime);
  const formattedTime = currentTime.toLocaleTimeString('en-US', { hour12: false });

  return (
    <div className="container">
      {/* <div className="display-date">{formattedDate}</div> */}
      <div className="display-time">{`${formattedDate} ${formattedTime}`}</div>
    </div>
  );
}

export default LiveDate;
