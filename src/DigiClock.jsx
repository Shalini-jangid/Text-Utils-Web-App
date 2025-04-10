import React, { useEffect, useState } from 'react'

function DigiClock() {
  const [time, setTime] = useState(new Date());
  const [day, setDay] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer); // cleanup interval on unmount
  }, []);

  const formatTime = (dateObj) => {
    const hours = dateObj.getHours().toString().padStart(2, '0');
    const minutes = dateObj.getMinutes().toString().padStart(2, '0');
    const seconds = dateObj.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const showDayAndDate = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    setDay(days[today.getDay()]);
    setDate(today.toLocaleDateString());
  };
  return (
    <div>
      <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div className="clock-box text-center p-4 rounded shadow">
        <h1 className="display-3 time mb-3">{formatTime(time)}</h1>
        <h4 className="day text-primary transition">{day}</h4>
        <h5 className="date text-secondary transition">{date}</h5>
        <button className="btn btn-danger mt-4" onClick={showDayAndDate}>
          Show Day & Date
        </button>
      </div>
    </div>
    </div>
  )
}

export default DigiClock
