import React from 'react';

const PlayListFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M1.66699 15H10.0003V16.6667H1.66699V15ZM1.66699 9.16671H13.3337V10.8334H1.66699V9.16671ZM1.66699 3.33337H18.3337V5.00004H1.66699V3.33337ZM15.8337 12.6423V7.50004H20.0003V9.16671H17.5003V15C17.5003 16.3808 16.3811 17.5 15.0003 17.5C13.6196 17.5 12.5003 16.3808 12.5003 15C12.5003 13.6193 13.6196 12.5 15.0003 12.5C15.2925 12.5 15.573 12.5502 15.8337 12.6423Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PlayListFill;
