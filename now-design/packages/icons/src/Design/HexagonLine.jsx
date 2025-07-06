import React from 'react';

const HexagonLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.5833 2.08337L19.1666 10L14.5833 17.9167H5.41659L0.833252 10L5.41659 2.08337H14.5833ZM13.6223 3.75004H6.37751L2.75909 10L6.37751 16.25H13.6223L17.2408 10L13.6223 3.75004Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default HexagonLine;
