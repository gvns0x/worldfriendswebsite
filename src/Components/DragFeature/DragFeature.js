import React, { useState, useRef } from 'react';
import './DragFeature.css'; // import CSS for the styling

const DragFeature = () => {
  const [fillPercentage, setFillPercentage] = useState(70);
  const barRef = useRef(null);

  const handleDragOrHover = (e) => {
    if (barRef.current) {
      const rect = barRef.current.getBoundingClientRect();
      const newPercentage = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
      setFillPercentage(newPercentage * 100);
    }
  };

  // Determine if the percentage is out of the specified range
  const isOutOfRange = fillPercentage < 20 || fillPercentage > 70;

  const barStyle = {
    backgroundColor: isOutOfRange ? '#E9E3FE' : '#e6f7ff', // Red bar if out of range, otherwise light blue
  };

  const fillStyle = {
    width: `${fillPercentage}%`,
    background: isOutOfRange
      ? 'linear-gradient(to bottom, #F5F1FF 0%, #DACDF7 12%, #B4A2FF 82%, #B4A1FF 89%, #BCACFF 100% )'
      : 'linear-gradient(to bottom, #E5FBFF 0%, #C5F8FF 12%, #97EAFF 82%, #89E9FF 89%, #97EAFF 100%)', // Normal gradient fill
    transition: 'width 0.1s, background 0.3s', // Smooth transition for both width and color
  };

  

  return (
    <div
      className="drag-bar"
      ref={barRef}
      style={barStyle} // Apply dynamic bar style
      onMouseMove={handleDragOrHover}
      onMouseDown={handleDragOrHover}
    >
      <div className="fill" style={fillStyle} /> {/* Apply dynamic fill style */}
    </div>
  );
};

export default DragFeature;