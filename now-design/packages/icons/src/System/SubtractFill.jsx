import React from 'react';

const SubtractFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15.8327 9.16675H4.16602V10.8334H15.8327V9.16675Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SubtractFill;
