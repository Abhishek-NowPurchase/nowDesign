import React from 'react';

const GobletLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.16667 15.8333V11.5741L2.5 4.16667V2.5H17.5V4.16667L10.8333 11.5741V15.8333H15V17.5H5V15.8333H9.16667ZM6.24227 5.83333H13.7577L15.2577 4.16667H4.74227L6.24227 5.83333ZM7.74227 7.5L10 10.0086L12.2577 7.5H7.74227Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default GobletLine;
