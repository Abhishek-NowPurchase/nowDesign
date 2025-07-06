import React from 'react';

const RssFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.5 2.5C10.7843 2.5 17.5 9.21575 17.5 17.5H15C15 10.5964 9.40358 5 2.5 5V2.5ZM2.5 8.33333C7.56261 8.33333 11.6667 12.4374 11.6667 17.5H9.16667C9.16667 13.8181 6.1819 10.8333 2.5 10.8333V8.33333ZM2.5 14.1667C4.34095 14.1667 5.83333 15.6591 5.83333 17.5H2.5V14.1667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default RssFill;
