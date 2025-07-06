import React from 'react';

const PlayListAddFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M1.66699 15H10.0003V16.6667H1.66699V15ZM1.66699 9.16671H18.3337V10.8334H1.66699V9.16671ZM1.66699 3.33337H18.3337V5.00004H1.66699V3.33337ZM15.0003 15V12.5H16.667V15H19.167V16.6667H16.667V19.1667H15.0003V16.6667H12.5003V15H15.0003Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PlayListAddFill;
