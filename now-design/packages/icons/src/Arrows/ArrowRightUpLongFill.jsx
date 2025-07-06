import React from 'react';

const ArrowRightUpLongFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.51811 15.3035L4.69645 16.482L12.7022 8.47632L15.8925 11.6667V4.10742L8.33333 4.10743L11.5237 7.2978L3.51811 15.3035Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowRightUpLongFill;
