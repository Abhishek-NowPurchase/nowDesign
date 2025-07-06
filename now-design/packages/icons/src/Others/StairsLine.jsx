import React from 'react';

const StairsLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M12.5 2.5H17.5V17.5H2.5V12.5H5.83333V9.16667H9.16667V5.83333H12.5V2.5ZM14.1667 4.16667V7.5H10.8333V10.8333H7.5V14.1667H4.16667V15.8333H15.8333V4.16667H14.1667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default StairsLine;
