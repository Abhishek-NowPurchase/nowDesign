import React from 'react';

const ArrowRightDownLongLine = ({ size = 24, color = 'currentColor', ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3.51801 4.69657L4.69636 3.51807L14.2258 13.0474V8.39267H15.8924V15.8927H8.39242V14.226H13.0473L3.51801 4.69657Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowRightDownLongLine;
