import React from 'react';

const TornadoLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M1.66602 2.5H18.3327V4.16667H1.66602V2.5ZM3.33268 5.83333H16.666V7.5H3.33268V5.83333ZM6.66601 9.16667H18.3327V10.8333H6.66601V9.16667ZM8.33268 12.5H14.9993V14.1667H8.33268V12.5ZM6.66601 15.8333H11.666V17.5H6.66601V15.8333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default TornadoLine;
