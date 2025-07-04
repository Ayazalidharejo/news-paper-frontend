import React, { useState } from 'react';
import img from "../Untitled.png";

const Islamabad = () => {
  const [scale, setScale] = useState(1);

  const handleWheel = (e) => {
    e.preventDefault(); // stop page scroll
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setScale(prev => {
      const newScale = prev + delta;
      return Math.min(Math.max(newScale, 0.5), 3); // limit between 0.5x and 3x
    });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <div
        onWheel={handleWheel}
        style={{
          display: 'inline-block',
          overflow: 'hidden',
          border: '1px solid #ccc',
          marginTop: '10px',
          padding: '5px',
          cursor: 'zoom-in'
        }}
      >
        <img
          src={img}
          alt="Lahore"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'center center',
            transition: 'transform 0.2s ease',
            maxWidth: '100%',
            height: 'auto',
            display: 'block'
          }}
        />
      </div>
    </div>
  );
};

export default Islamabad;
