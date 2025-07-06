import React from 'react';

const ExpandDiagonal2Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5.34517 4.16667H8.33333V2.5H2.5V8.33333H4.16667V5.34517L7.74407 8.92258L8.92258 7.74407L5.34517 4.16667ZM17.5 11.6667H15.8333V14.6548L12.2559 11.0774L11.0774 12.2559L14.6548 15.8333H11.6667V17.5H17.5V11.6667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ExpandDiagonal2Line;
