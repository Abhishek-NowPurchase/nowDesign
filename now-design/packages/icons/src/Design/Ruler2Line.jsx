import React from 'react';

const Ruler2Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.1667 15.8333H15.8333V11.6667H8.33333V4.16667H4.16667V5.83333H5.83333V7.5H4.16667V9.16667H6.66667V10.8333H4.16667V12.5H5.83333V14.1667H4.16667V15.8333H5.83333V14.1667H7.5V15.8333H9.16667V13.3333H10.8333V15.8333H12.5V14.1667H14.1667V15.8333ZM10 10H16.6667C17.1269 10 17.5 10.3731 17.5 10.8333V16.6667C17.5 17.1269 17.1269 17.5 16.6667 17.5H3.33333C2.8731 17.5 2.5 17.1269 2.5 16.6667V3.33333C2.5 2.8731 2.8731 2.5 3.33333 2.5H9.16667C9.62692 2.5 10 2.8731 10 3.33333V10Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Ruler2Line;
