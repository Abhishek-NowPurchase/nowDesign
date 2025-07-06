import React from 'react';

const LineChartFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.16667 2.5V15.8333H17.5V17.5H2.5V2.5H4.16667ZM16.6161 4.94945L18.3839 6.71722L13.3333 11.7677L10.8333 9.2675L7.55055 12.5506L5.78278 10.7827L10.8333 5.73223L13.3333 8.2325L16.6161 4.94945Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default LineChartFill;
