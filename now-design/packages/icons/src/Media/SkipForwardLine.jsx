import React from 'react';

const SkipForwardLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.3337 10.5556L4.81478 16.2349C4.62332 16.3625 4.36462 16.3108 4.23697 16.1193C4.19134 16.0509 4.16699 15.9705 4.16699 15.8881V4.11192C4.16699 3.88181 4.35354 3.69526 4.58366 3.69526C4.66592 3.69526 4.74634 3.71961 4.81478 3.76523L13.3337 9.44446V4.16671C13.3337 3.70647 13.7067 3.33337 14.167 3.33337C14.6272 3.33337 15.0003 3.70647 15.0003 4.16671V15.8334C15.0003 16.2936 14.6272 16.6667 14.167 16.6667C13.7067 16.6667 13.3337 16.2936 13.3337 15.8334V10.5556ZM5.83366 6.44757V13.5525L11.1623 10L5.83366 6.44757Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SkipForwardLine;
