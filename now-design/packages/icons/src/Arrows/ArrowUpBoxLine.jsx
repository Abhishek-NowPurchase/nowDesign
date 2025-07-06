import React from 'react';

const ArrowUpBoxLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.6667 2.5H3.33333C2.8731 2.5 2.5 2.8731 2.5 3.33333V16.6667C2.5 17.1269 2.8731 17.5 3.33333 17.5H16.6667C17.1269 17.5 17.5 17.1269 17.5 16.6667V3.33333C17.5 2.8731 17.1269 2.5 16.6667 2.5ZM4.16667 15.8333V4.16667H15.8333V15.8333H4.16667ZM10 5.28592L5.28596 10L6.46447 11.1785L9.16667 8.47625V14.714H10.8333V8.47625L13.5355 11.1785L14.7141 10L10 5.28592Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowUpBoxLine;
