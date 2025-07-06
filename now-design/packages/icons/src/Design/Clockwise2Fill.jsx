import React from 'react';

const Clockwise2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M8.33333 3.33337V0.833374L12.5 4.16671L8.33333 7.50004V5.00004H6.66667C5.28596 5.00004 4.16667 6.11933 4.16667 7.50004V10.8334H2.5V7.50004C2.5 5.19886 4.36548 3.33337 6.66667 3.33337H8.33333ZM7.5 9.16671C7.5 8.70646 7.8731 8.33337 8.33333 8.33337H16.6667C17.1269 8.33337 17.5 8.70646 17.5 9.16671V17.5C17.5 17.9603 17.1269 18.3334 16.6667 18.3334H8.33333C7.8731 18.3334 7.5 17.9603 7.5 17.5V9.16671Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Clockwise2Fill;
