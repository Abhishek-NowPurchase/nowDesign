import React from 'react';

const FlashlightLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.834 7.5H17.5007L9.16732 20V12.5H3.33398L10.834 0V7.5ZM9.16732 9.16667V6.01719L6.27763 10.8333H10.834V14.4953L14.3865 9.16667H9.16732Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FlashlightLine;
