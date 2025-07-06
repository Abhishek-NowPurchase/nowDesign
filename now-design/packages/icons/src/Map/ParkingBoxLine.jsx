import React from 'react';

const ParkingBoxLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33333 2.5H16.6667C17.1269 2.5 17.5 2.8731 17.5 3.33333V16.6667C17.5 17.1269 17.1269 17.5 16.6667 17.5H3.33333C2.8731 17.5 2.5 17.1269 2.5 16.6667V3.33333C2.5 2.8731 2.8731 2.5 3.33333 2.5ZM4.16667 4.16667V15.8333H15.8333V4.16667H4.16667ZM7.5 5.83333H10.4167C12.0275 5.83333 13.3333 7.13917 13.3333 8.75C13.3333 10.3608 12.0275 11.6667 10.4167 11.6667H9.16667V14.1667H7.5V5.83333ZM9.16667 7.5V10H10.4167C11.107 10 11.6667 9.44033 11.6667 8.75C11.6667 8.05964 11.107 7.5 10.4167 7.5H9.16667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ParkingBoxLine;
