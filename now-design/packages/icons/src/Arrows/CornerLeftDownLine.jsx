import React from 'react';

const CornerLeftDownLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M8.3335 4.16674L15.8334 4.16663V5.83329L10.0002 5.83338L10.0001 14.3099L13.2915 11.0185L14.4701 12.197L9.16675 17.5003L3.86345 12.197L5.04196 11.0185L8.33342 14.31L8.3335 4.16674Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CornerLeftDownLine;
