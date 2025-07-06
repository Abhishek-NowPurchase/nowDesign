import React from 'react';

const ArrowLeftUpLongFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15.3035 16.4819L16.482 15.3035L8.47633 7.29774L11.6667 4.10742H4.10741L4.10741 11.6666L7.29779 8.47629L15.3035 16.4819Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowLeftUpLongFill;
