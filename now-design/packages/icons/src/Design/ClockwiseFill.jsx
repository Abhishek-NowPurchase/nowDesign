import React from 'react';

const ClockwiseFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.6667 8.33333H19.1667L15.8334 12.5L12.5001 8.33333H15.0001V6.66667C15.0001 5.28596 13.8808 4.16667 12.5001 4.16667H9.16675V2.5H12.5001C14.8012 2.5 16.6667 4.36548 16.6667 6.66667V8.33333ZM10.8334 7.5C11.2937 7.5 11.6667 7.8731 11.6667 8.33333V16.6667C11.6667 17.1269 11.2937 17.5 10.8334 17.5H2.50008C2.03985 17.5 1.66675 17.1269 1.66675 16.6667V8.33333C1.66675 7.8731 2.03985 7.5 2.50008 7.5H10.8334Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ClockwiseFill;
