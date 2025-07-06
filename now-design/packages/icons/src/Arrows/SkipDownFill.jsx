import React from 'react';

const SkipDownFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15 14.1667H5V12.5H15V14.1667ZM10 10.8334L15 5.83337H5L10 10.8334Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SkipDownFill;
