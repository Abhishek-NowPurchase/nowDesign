import React from 'react';

const ReplyFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.16671 16.6667L0.833374 10L9.16671 3.33337V7.50004C13.769 7.50004 17.5 11.231 17.5 15.8334C17.5 16.0608 17.491 16.2861 17.473 16.509C16.2171 14.1252 13.715 12.5 10.8334 12.5H9.16671V16.6667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ReplyFill;
