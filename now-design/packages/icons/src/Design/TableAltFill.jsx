import React from 'react';

const TableAltFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5.83341 11.6667V2.5H2.50008C2.03985 2.5 1.66675 2.8731 1.66675 3.33333V11.6667H5.83341ZM12.5001 11.6667V2.5H7.50008V11.6667H12.5001ZM18.3334 11.6667V3.33333C18.3334 2.8731 17.9603 2.5 17.5001 2.5H14.1667V11.6667H18.3334ZM17.5001 17.5C17.9603 17.5 18.3334 17.1269 18.3334 16.6667V13.3333H1.66675V16.6667C1.66675 17.1269 2.03985 17.5 2.50008 17.5H17.5001Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default TableAltFill;
