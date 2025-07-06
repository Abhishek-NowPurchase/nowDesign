import React from 'react';

const ArrowLeftUpLongLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.482 15.3034L15.3037 16.4819L5.77423 6.95251V11.6073H4.10756V4.1073H11.6076V5.77397H6.95271L16.482 15.3034Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowLeftUpLongLine;
