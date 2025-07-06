import React from 'react';

const LayoutLeft2Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.5001 2.5C17.9603 2.5 18.3334 2.8731 18.3334 3.33333V16.6667C18.3334 17.1269 17.9603 17.5 17.5001 17.5H2.50008C2.03985 17.5 1.66675 17.1269 1.66675 16.6667V3.33333C1.66675 2.8731 2.03985 2.5 2.50008 2.5H17.5001ZM16.6667 4.16667H3.33341V15.8333H16.6667V4.16667ZM6.66675 5.83333V14.1667H5.00008V5.83333H6.66675Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default LayoutLeft2Line;
