import React from 'react';

const TableFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M12.5001 17.5H7.50008V8.33333H12.5001V17.5ZM14.1667 17.5V8.33333H18.3334V16.6667C18.3334 17.1269 17.9603 17.5 17.5001 17.5H14.1667ZM5.83341 17.5H2.50008C2.03985 17.5 1.66675 17.1269 1.66675 16.6667V8.33333H5.83341V17.5ZM18.3334 6.66667H1.66675V3.33333C1.66675 2.8731 2.03985 2.5 2.50008 2.5H17.5001C17.9603 2.5 18.3334 2.8731 18.3334 3.33333V6.66667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default TableFill;
