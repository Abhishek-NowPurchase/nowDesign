import React from 'react';

const CornerDownRightFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.16657 11.6665L4.16647 4.16665L5.83313 4.16663L5.83322 9.99988L12.1549 9.99996V5.48813L17.5001 10.8333L12.1549 16.1785V11.6666L4.16657 11.6665Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CornerDownRightFill;
