import React from 'react';

const DoorLockBoxLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33333 2.5H16.6667C17.1269 2.5 17.5 2.8731 17.5 3.33333V16.6667C17.5 17.1269 17.1269 17.5 16.6667 17.5H3.33333C2.8731 17.5 2.5 17.1269 2.5 16.6667V3.33333C2.5 2.8731 2.8731 2.5 3.33333 2.5ZM4.16667 4.16667V15.8333H15.8333V4.16667H4.16667ZM9.16667 10.66C8.43083 10.3385 7.91667 9.60433 7.91667 8.75C7.91667 7.59941 8.84942 6.66667 10 6.66667C11.1506 6.66667 12.0833 7.59941 12.0833 8.75C12.0833 9.60433 11.5692 10.3385 10.8333 10.66V13.3333H9.16667V10.66Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default DoorLockBoxLine;
