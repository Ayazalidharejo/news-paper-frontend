
import React, { useState, useRef } from 'react';
import img from "../Untitled3.png";
import img1 from "../Untitled2.png";

const Sindhi = () => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const lastPosition = useRef({ x: 0, y: 0 });

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setScale(prev => {
      const newScale = prev + delta;
      return Math.min(Math.max(newScale, 0.5), 3);
    });
  };

  const handleMouseDown = (e) => {
    setDragging(true);
    lastPosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const dx = e.clientX - lastPosition.current.x;
    const dy = e.clientY - lastPosition.current.y;
    setPosition(prev => ({ x: prev.x + dx, y: prev.y + dy }));
    lastPosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '20px',
        userSelect: 'none',
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        style={{
          display: 'inline-block',
          overflow: 'hidden',
          border: '1px solid #ccc',
          cursor: dragging ? 'grabbing' : 'grab',
          width: '100%',            // 💡 Full width of page
          height: '100vh',          // 💡 Full screen height
          maxWidth: '100%',
          position: 'relative',
        }}
      >
        <img
          src={img}
          alt="Lahore"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain', // or use 'cover' if you want full fill (with possible cropping)
            transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
            transformOrigin: 'center center',
            transition: dragging ? 'none' : 'transform 0.2s ease',
            pointerEvents: 'none',
          }}
        />
        <img
          src={img1}
          alt="Lahore"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain', // or use 'cover' if you want full fill (with possible cropping)
            // transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
            transformOrigin: 'center center',
            transition: dragging ? 'none' : 'transform 0.2s ease',
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  );
};

export default Sindhi;
