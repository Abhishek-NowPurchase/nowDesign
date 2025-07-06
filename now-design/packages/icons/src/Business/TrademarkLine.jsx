import React from 'react';

const TrademarkLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M8.33333 5V6.66667H5V15H3.33333V6.66667H0V5H8.33333ZM10 5H12.0833L14.5832 9.33L17.0833 5H19.1667V15H17.5V7.61083L14.5832 12.6633L11.6667 7.6125V15H10V5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default TrademarkLine;
