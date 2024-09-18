import React, { useState, useRef, useEffect } from 'react';
import './DragFeature.css';

const DragFeature = () => {
  const [fillPercentage, setFillPercentage] = useState(70);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this breakpoint as needed
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMove = (clientX) => {
    if (barRef.current) {
      const rect = barRef.current.getBoundingClientRect();
      const newPercentage = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
      setFillPercentage(newPercentage * 100);
    }
  };

  const handleMouseMove = (e) => {
    if (!isMobile && (isDragging || !isMobile)) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e) => {
    if (isMobile && isDragging) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleStart = () => setIsDragging(true);
  const handleEnd = () => setIsDragging(false);

  // Determine if the percentage is out of the specified range
  const isOutOfRange = fillPercentage < 20 || fillPercentage > 70;

  const barStyle = {
    backgroundColor: isOutOfRange ? '#E9E3FE' : '#e6f7ff',
  };

  const fillStyle = {
    width: `${fillPercentage}%`,
    background: isOutOfRange
      ? 'linear-gradient(to bottom, #F5F1FF 0%, #DACDF7 12%, #B4A2FF 82%, #B4A1FF 89%, #BCACFF 100% )'
      : 'linear-gradient(to bottom, #E5FBFF 0%, #C5F8FF 12%, #97EAFF 82%, #89E9FF 89%, #97EAFF 100%)',
    transition: 'width 0.1s, background 0.3s',
  };

  return (
    <div
      className="drag-bar"
      ref={barRef}
      style={barStyle}
      onMouseMove={handleMouseMove}
      onMouseDown={handleStart}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleEnd}
    >
      <div className="fill" style={fillStyle} />
    </div>
  );
};

export default DragFeature;