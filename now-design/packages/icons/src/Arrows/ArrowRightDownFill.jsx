import React from 'react';

const ArrowRightDownFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.69717 10.8763L4.98312 6.16227L6.16162 4.98376L10.8757 9.69779L15.0005 5.57302V15.0011H5.57237L9.69717 10.8763Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowRightDownFill;
