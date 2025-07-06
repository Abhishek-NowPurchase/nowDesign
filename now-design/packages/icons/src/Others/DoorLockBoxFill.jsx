import React from 'react';

const DoorLockBoxFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33333 2.5H16.6667C17.1269 2.5 17.5 2.8731 17.5 3.33333V16.6667C17.5 17.1269 17.1269 17.5 16.6667 17.5H3.33333C2.8731 17.5 2.5 17.1269 2.5 16.6667V3.33333C2.5 2.8731 2.8731 2.5 3.33333 2.5ZM9.16667 10.66V13.3333H10.8333V10.66C11.5692 10.3385 12.0833 9.60433 12.0833 8.75C12.0833 7.59941 11.1506 6.66667 10 6.66667C8.84942 6.66667 7.91667 7.59941 7.91667 8.75C7.91667 9.60433 8.43083 10.3385 9.16667 10.66Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default DoorLockBoxFill;
