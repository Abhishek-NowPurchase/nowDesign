import React from 'react';

const ExpandDiagonalLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.6548 4.16667H11.6667V2.5H17.5V8.33333H15.8333V5.34517L12.2559 8.92258L11.0774 7.74407L14.6548 4.16667ZM2.5 11.6667H4.16667V14.6548L7.74407 11.0774L8.92258 12.2559L5.34517 15.8333H8.33333V17.5H2.5V11.6667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ExpandDiagonalLine;
