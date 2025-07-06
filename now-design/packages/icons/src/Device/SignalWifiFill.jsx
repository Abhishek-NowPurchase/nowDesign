import React from 'react';

const SignalWifiFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0002 2.5C13.5705 2.5 16.8494 3.74736 19.4251 5.83006L10.0002 17.5L0.574707 5.83059C3.15041 3.74757 6.42961 2.5 10.0002 2.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SignalWifiFill;
