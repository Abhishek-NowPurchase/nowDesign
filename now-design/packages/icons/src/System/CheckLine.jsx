import React from 'react';

const CheckLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M8.3326 12.6424L15.9929 4.98206L17.1714 6.16056L8.3326 14.9994L3.0293 9.69612L4.20781 8.51762L8.3326 12.6424Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CheckLine;
