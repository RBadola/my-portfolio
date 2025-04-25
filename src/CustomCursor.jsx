import React, { useEffect, useRef, useState } from 'react'

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
    return (
        <div
        className="fixed top-0 left-0 w-5 h-5 bg-blue-500 rounded-full pointer-events-none transition-transform duration-75 ease-linear z-50"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`
        }}
      />
    )
}

export default CustomCursor