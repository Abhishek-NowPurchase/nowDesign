import React from 'react';

const ParkingFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5 2.5H10.8333C13.5947 2.5 15.8333 4.73857 15.8333 7.5C15.8333 10.2614 13.5947 12.5 10.8333 12.5H8.33333V17.5H5V2.5ZM8.33333 5.83333V9.16667H10.8333C11.7538 9.16667 12.5 8.4205 12.5 7.5C12.5 6.57952 11.7538 5.83333 10.8333 5.83333H8.33333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ParkingFill;
