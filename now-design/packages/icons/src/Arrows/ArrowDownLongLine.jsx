import React from 'react';

const ArrowDownLongLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.8334 1.6665L9.16683 1.66638V15.143L5.87536 11.8516L4.69685 13.0301L10.0002 18.3334L15.3035 13.0301L14.1249 11.8516L10.8335 15.1431L10.8334 1.6665Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowDownLongLine;
