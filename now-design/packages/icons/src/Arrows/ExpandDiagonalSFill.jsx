import React from 'react';

const ExpandDiagonalSFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15.8333 4.16663H9.58333L12.1191 6.70237L6.70241 12.119L4.16666 9.58329V15.8333H10.4167L7.88092 13.2975L13.2976 7.88089L15.8333 10.4166V4.16663Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ExpandDiagonalSFill;
