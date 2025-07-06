import React from 'react';

const Hourglass2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4 2H20V6.45994L13.5366 12L20 17.5401V22H4V17.5401L10.4634 12L4 6.45994V2ZM16.2967 7L18 5.54007V4H6V5.54007L7.70326 7H16.2967ZM12 13.3171L6 18.4599V20H7L12 17L17 20H18V18.4599L12 13.3171Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Hourglass2Fill;
