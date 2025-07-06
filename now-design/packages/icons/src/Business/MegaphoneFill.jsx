import React from 'react';

const MegaphoneFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.5 8.38583V3.33333C17.5 2.8731 17.1269 2.5 16.6667 2.5H15.8333C14.1845 4.14887 11.0856 5.07273 9.16667 5.51068V14.4893C11.0856 14.9273 14.1845 15.8512 15.8333 17.5H16.6667C17.1269 17.5 17.5 17.1269 17.5 16.6667V11.6142C18.2188 11.4292 18.75 10.7766 18.75 10C18.75 9.22342 18.2188 8.57083 17.5 8.38583ZM4.16667 5.83333C3.24619 5.83333 2.5 6.57953 2.5 7.5V12.5C2.5 13.4205 3.24619 14.1667 4.16667 14.1667H5L5.83333 18.3333H7.5V5.83333H4.16667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MegaphoneFill;
