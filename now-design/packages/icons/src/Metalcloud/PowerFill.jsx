import React from 'react';

const PowerFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M11.7713 8.22917H15.9404L8.22965 20.5664V11.7708H4.06055L11.7713 -0.566406V8.22917Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PowerFill;
