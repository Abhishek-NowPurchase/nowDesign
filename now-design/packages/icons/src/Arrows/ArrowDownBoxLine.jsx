import React from 'react';

const ArrowDownBoxLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.6667 2.5H3.33333C2.8731 2.5 2.5 2.8731 2.5 3.33333V16.6667C2.5 17.1269 2.8731 17.5 3.33333 17.5H16.6667C17.1269 17.5 17.5 17.1269 17.5 16.6667V3.33333C17.5 2.8731 17.1269 2.5 16.6667 2.5ZM4.16667 15.8333V4.16667H15.8333V15.8333H4.16667ZM9.16708 5.28646V11.5242L6.46491 8.822L5.28639 10.0005L10.0004 14.7146L14.7145 10.0005L13.536 8.822L10.8337 11.5242V5.28646H9.16708Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowDownBoxLine;
