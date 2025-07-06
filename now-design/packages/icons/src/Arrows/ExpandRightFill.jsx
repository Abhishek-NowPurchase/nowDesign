import React from 'react';

const ExpandRightFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M11.6665 4.16663L17.5001 9.99998L11.6665 15.8333V10.8335H6.6665L6.66648 9.16681H11.6665V4.16663ZM3.33321 15.8333V4.16663H4.99987V15.8333H3.33321Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ExpandRightFill;
