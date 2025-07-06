import React from 'react';

const ExpandDiagonalS2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.16667 4.16663V10.4166L6.70241 7.88089L12.1191 13.2975L9.58334 15.8333H15.8333V9.58329L13.2976 12.119L7.88093 6.70237L10.4167 4.16663H4.16667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ExpandDiagonalS2Fill;
