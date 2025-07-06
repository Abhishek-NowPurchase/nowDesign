import React from 'react';

const BarChartFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.5 9.99996H5.83333V17.5H2.5V9.99996ZM14.1667 6.66663H17.5V17.5H14.1667V6.66663ZM8.33333 1.66663H11.6667V17.5H8.33333V1.66663Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default BarChartFill;
