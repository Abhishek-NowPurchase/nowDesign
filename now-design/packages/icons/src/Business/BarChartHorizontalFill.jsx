import React from 'react';

const BarChartHorizontalFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10 2.5V5.83333H2.5V2.5H10ZM13.3333 14.1667V17.5H2.5V14.1667H13.3333ZM18.3333 8.33333V11.6667H2.5V8.33333H18.3333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default BarChartHorizontalFill;
