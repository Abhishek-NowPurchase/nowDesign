import React from 'react';

const LayoutBottomLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.5001 2.5C17.9603 2.5 18.3334 2.8731 18.3334 3.33333V16.6667C18.3334 17.1269 17.9603 17.5 17.5001 17.5H2.50008C2.03985 17.5 1.66675 17.1269 1.66675 16.6667V3.33333C1.66675 2.8731 2.03985 2.5 2.50008 2.5H17.5001ZM3.33341 13.3333V15.8333H16.6667V13.3333H3.33341ZM3.33341 11.6667H16.6667V4.16667H3.33341V11.6667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default LayoutBottomLine;
