import React from 'react';

const CellphoneFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5.83317 1.66667H14.9998C15.4601 1.66667 15.8332 2.03977 15.8332 2.5V17.5C15.8332 17.9603 15.4601 18.3333 14.9998 18.3333H4.99984C4.5396 18.3333 4.1665 17.9603 4.1665 17.5V0H5.83317V1.66667ZM5.83317 3.33333V7.5H14.1665V3.33333H5.83317Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CellphoneFill;
