import React from 'react';

const SkipUpLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10 11.5952L13.9941 15.5893L15.1726 14.4108L10 9.23821L4.82741 14.4108L6.00592 15.5893L10 11.5952ZM5 5.83337H15V7.50004H5V5.83337Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SkipUpLine;
