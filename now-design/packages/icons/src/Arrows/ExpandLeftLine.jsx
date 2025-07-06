import React from 'react';

const ExpandLeftLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M8.39249 4.10742L9.57099 5.28593L5.69027 9.16662L13.3335 9.16679V10.8335L5.69031 10.8333L9.57099 14.714L8.39249 15.8925L2.49994 9.99995L8.39249 4.10742ZM15.0001 15.8333V4.1666H16.6667V15.8333H15.0001Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ExpandLeftLine;
