import React, { useEffect } from 'react';
import '../scss/clock.css';

const ClockUi = () => {
  useEffect(() => {
    const updateClock = () => {
      const h = new Date().getHours();
      const m = new Date().getMinutes();
      const s = new Date().getSeconds();

      const hDeg = h * 30 + m * (360 / 720);
      const mDeg = m * 6 + s * (360 / 3600);
      const sDeg = s * 6;

      const hEl = document.querySelector('.hour_hand');
      const mEl = document.querySelector('.minute_hand');
      const sEl = document.querySelector('.second_hand');

      hEl.style.transform = `rotate(${hDeg}deg)`;
      mEl.style.transform = `rotate(${mDeg}deg)`;
      sEl.style.transform = `rotate(${sDeg}deg)`;
    };

    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container'>
      <div className='clock_ui'>
        <div className="dot" />
        <div className="hour_hand" />
        <div className="minute_hand" />
        <div className="second_hand" />
        <div className="hour_markers">
          <span className="h3">3</span>
          <span className="h6">6</span>
          <span className="h9">9</span>
          <span className="h12">12</span>
        </div>
        <div className="diallines-container">
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="diallines"
              style={{ transform: `rotate(${6 * i}deg)` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClockUi;
