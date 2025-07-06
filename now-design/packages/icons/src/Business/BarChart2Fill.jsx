import React from 'react';

const BarChart2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M1.66663 10.8333H6.66663V17.5H1.66663V10.8333ZM7.49996 2.5H12.5V17.5H7.49996V2.5ZM13.3333 6.66667H18.3333V17.5H13.3333V6.66667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default BarChart2Fill;
