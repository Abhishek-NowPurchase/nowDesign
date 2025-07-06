import React from 'react';

const OctagonFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.2801 2.08411L17.9176 6.72158V13.28L13.2801 17.9175H6.7217L2.08423 13.28V6.72158L6.7217 2.08411H13.2801Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default OctagonFill;
