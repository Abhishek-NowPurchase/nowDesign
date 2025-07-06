import React from 'react';

const StairsFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M12.5 2.5H17.5V17.5H2.5V12.5H5.83333V9.16667H9.16667V5.83333H12.5V2.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default StairsFill;
