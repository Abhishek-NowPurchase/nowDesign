import React from 'react';

const BarChartHorizontalLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10 2.5V4.16667H2.5V2.5H10ZM13.3333 15.8333V17.5H2.5V15.8333H13.3333ZM18.3333 9.16667V10.8333H2.5V9.16667H18.3333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default BarChartHorizontalLine;
