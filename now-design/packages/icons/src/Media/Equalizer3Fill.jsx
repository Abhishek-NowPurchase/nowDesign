import React from 'react';

const Equalizer3Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5.83333 2.5V5H2.5V6.66667H5.83333V9.16667H8.33333V2.5H5.83333ZM10 6.66667H17.5V5H10V6.66667ZM14.1667 10.8333V13.3333H17.5V15H14.1667V17.5H11.6667V10.8333H14.1667ZM10 15H2.5V13.3333H10V15Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Equalizer3Fill;
