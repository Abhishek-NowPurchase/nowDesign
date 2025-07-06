import React from 'react';

const RhythmLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M1.66699 7.5H3.33366V17.5H1.66699V7.5ZM6.66699 2.5H8.33366V17.5H6.66699V2.5ZM11.667 10H13.3337V17.5H11.667V10ZM16.667 5H18.3337V17.5H16.667V5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default RhythmLine;
