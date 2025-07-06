import React from 'react';

const FullscreenExitFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15.0003 5.83333H18.3337V7.5H13.3337V2.5H15.0003V5.83333ZM6.66699 7.5H1.66699V5.83333H5.00032V2.5H6.66699V7.5ZM15.0003 14.1667V17.5H13.3337V12.5H18.3337V14.1667H15.0003ZM6.66699 12.5V17.5H5.00032V14.1667H1.66699V12.5H6.66699Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FullscreenExitFill;
