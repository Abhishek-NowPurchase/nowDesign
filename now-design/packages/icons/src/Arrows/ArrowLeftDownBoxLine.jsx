import React from 'react';

const ArrowLeftDownBoxLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.6667 2.5H3.33333C2.8731 2.5 2.5 2.8731 2.5 3.33333V16.6667C2.5 17.1269 2.8731 17.5 3.33333 17.5H16.6667C17.1269 17.5 17.5 17.1269 17.5 16.6667V3.33333C17.5 2.8731 17.1269 2.5 16.6667 2.5ZM4.16667 15.8333V4.16667H15.8333V15.8333H4.16667ZM6.66667 13.3342V6.66748H8.33333V10.489L12.7441 6.07822L13.9226 7.25673L9.51183 11.6675H13.3333V13.3342H6.66667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowLeftDownBoxLine;
