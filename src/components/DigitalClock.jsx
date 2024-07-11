import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    const formatTime = (date) => {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    };
  
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-3xl font-bold text-white bg-gray-700 rounded-xl p-4 shadow-lg">
          {formatTime(time)}
        </div>
      </div>
    );
  };
export default DigitalClock;