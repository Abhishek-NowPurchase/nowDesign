import React from 'react';

const CheckboxLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33333 2.5H16.6667C17.1269 2.5 17.5 2.8731 17.5 3.33333V16.6667C17.5 17.1269 17.1269 17.5 16.6667 17.5H3.33333C2.8731 17.5 2.5 17.1269 2.5 16.6667V3.33333C2.5 2.8731 2.8731 2.5 3.33333 2.5ZM4.16667 4.16667V15.8333H15.8333V4.16667H4.16667ZM9.16883 13.3333L5.63333 9.79783L6.81184 8.61925L9.16883 10.9763L13.8829 6.26227L15.0614 7.44077L9.16883 13.3333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CheckboxLine;
