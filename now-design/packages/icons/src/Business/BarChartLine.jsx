import React from 'react';

const BarChartLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.5 9.99996H4.16667V17.5H2.5V9.99996ZM15.8333 6.66663H17.5V17.5H15.8333V6.66663ZM9.16667 1.66663H10.8333V17.5H9.16667V1.66663Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default BarChartLine;
