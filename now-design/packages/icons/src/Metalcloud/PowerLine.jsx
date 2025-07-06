import React from 'react';

const PowerLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M11.25 1.25V8.75H15L8.75 18.75V11.25H5L11.25 1.25Z" stroke="#E3E3E3" stroke-width="1.25"/>
    </svg>
  );
};

export default PowerLine;
