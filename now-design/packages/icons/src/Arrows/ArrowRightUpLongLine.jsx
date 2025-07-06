import React from 'react';

const ArrowRightUpLongLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.69657 16.482L3.51807 15.3036L13.0475 5.77421H8.39267V4.10754H15.8927V11.6076H14.226V6.95269L4.69657 16.482Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowRightUpLongLine;
