import React from 'react';

const ParkingLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5 2.5H10.8333C13.5947 2.5 15.8333 4.73857 15.8333 7.5C15.8333 10.2614 13.5947 12.5 10.8333 12.5H6.66667V17.5H5V2.5ZM6.66667 4.16667V10.8333H10.8333C12.6742 10.8333 14.1667 9.34092 14.1667 7.5C14.1667 5.65905 12.6742 4.16667 10.8333 4.16667H6.66667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ParkingLine;
