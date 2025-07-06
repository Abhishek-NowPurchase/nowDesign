import React from 'react';

const DoorLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.9983 2.5C15.4586 2.5 15.8317 2.8731 15.8317 3.33333V16.6667C15.8317 17.1269 15.4586 17.5 14.9983 17.5H4.99837C4.53813 17.5 4.16504 17.1269 4.16504 16.6667V3.33333C4.16504 2.8731 4.53813 2.5 4.99837 2.5H14.9983ZM14.165 4.16667H5.83171V15.8333H14.165V4.16667ZM12.4983 9.16667V10.8333H10.8317V9.16667H12.4983Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default DoorLine;
