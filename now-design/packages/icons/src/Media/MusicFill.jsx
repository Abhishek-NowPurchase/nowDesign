import React from 'react';

const MusicFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10 11.2793V2.5H16.6667V5H11.6667V14.1667C11.6667 16.0076 10.1743 17.5 8.33333 17.5C6.49238 17.5 5 16.0076 5 14.1667C5 12.3257 6.49238 10.8333 8.33333 10.8333C8.9405 10.8333 9.50975 10.9957 10 11.2793Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MusicFill;
