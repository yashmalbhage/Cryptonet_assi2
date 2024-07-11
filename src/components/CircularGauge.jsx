import React, { useState } from 'react';

const CircularGauge = ({ value, min, max, title, primaryColor, secondaryColor, textColor }) => {
  const percentage = ((value - min) / (max - min)) * 100;
  const angle = (percentage / 100) * 360;

  return (
    <div className="w-36 h-36 relative">
      <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke={secondaryColor}
          strokeWidth="10"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke={primaryColor}
          strokeWidth="10"
          strokeDasharray={`${angle} 360`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xl font-bold" style={{ color: textColor }}>
          {value}
        </span>
        <span className="text-sm mt-2" style={{ color: textColor }}>
          {title}
        </span>
      </div>
    </div>
  );
};

const TestTube = () => {
  const [color, setColor] = useState("#4ECDC4");

  const handleClick = () => {
    setColor((prevColor) => (prevColor === "#4ECDC4" ? "#FF6B6B" : "#4ECDC4"));
  };

  return (
    <div
      className="w-16 h-30 bg-gray-200 flex items-end justify-center cursor-pointer"
      onClick={handleClick}
    >
      <div className="w-full h-3/4 bg-white flex items-end justify-center overflow-hidden">
        <div className="w-full h-full" style={{ backgroundColor: color }}></div>
      </div>
    </div>
  );
};

const IoTDashboard = () => {
  return (
    <div className="flex  gap-4 p-1  mt-28 w-full h-full">
      <CircularGauge
        value={75}
        min={0}
        max={100}
        title="Temp (°C)"
        primaryColor="#FF6B6B"
        secondaryColor="#FFE66D"
        textColor="#4A4A4A"
      />
      <CircularGauge
        value={45}
        min={0}
        max={100}
        title="Humidity (%)"
        primaryColor="#4ECDC4"
        secondaryColor="#45B7AF"
        textColor="#4A4A4A"
      />
      <CircularGauge
        value={800}
        min={0}
        max={1000}
        title="Pressure (hPa)"
        primaryColor="#5D78FF"
        secondaryColor="#C8D6FF"
        textColor="#4A4A4A"
      />
      <TestTube />
      <TestTube />

    </div>
  );
};

export default IoTDashboard;
