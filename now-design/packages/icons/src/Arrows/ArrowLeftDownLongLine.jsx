import React from 'react';

const ArrowLeftDownLongLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.482 4.69657L15.3037 3.51807L5.77423 13.0474V8.39267H4.10756V15.8927H11.6076V14.226H6.95271L16.482 4.69657Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowLeftDownLongLine;
