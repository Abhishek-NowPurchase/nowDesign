import React from 'react';

const OctagonLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.2801 2.08411L17.9176 6.72158V13.28L13.2801 17.9175H6.7217L2.08423 13.28V6.72158L6.7217 2.08411H13.2801ZM12.5897 3.75077H7.41205L3.7509 7.41193V12.5896L7.41205 16.2508H12.5897L16.2509 12.5896V7.41193L12.5897 3.75077Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default OctagonLine;
