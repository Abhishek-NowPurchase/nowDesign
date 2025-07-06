import React from 'react';

const LayoutBottomFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M18.3334 13.3333V16.6667C18.3334 17.1269 17.9603 17.5 17.5001 17.5H2.50008C2.03985 17.5 1.66675 17.1269 1.66675 16.6667V13.3333H18.3334ZM17.5001 2.5C17.9603 2.5 18.3334 2.8731 18.3334 3.33333V11.6667H1.66675V3.33333C1.66675 2.8731 2.03985 2.5 2.50008 2.5H17.5001Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default LayoutBottomFill;
