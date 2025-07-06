import React from 'react';

const TerminalLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.16674 9.99996L3.27421 15.8925L2.0957 14.714L6.80974 9.99996L2.0957 5.28593L3.27421 4.10742L9.16674 9.99996ZM9.16674 15.8333H17.5001V17.5H9.16674V15.8333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default TerminalLine;
