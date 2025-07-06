import React from 'react';

const AlignItemLeftFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.5 17.5V2.5H4.16667V17.5H2.5ZM5.83333 11.6667C5.83333 11.2064 6.20643 10.8333 6.66667 10.8333H13.3333C13.7936 10.8333 14.1667 11.2064 14.1667 11.6667V15.8333C14.1667 16.2936 13.7936 16.6667 13.3333 16.6667H6.66667C6.20643 16.6667 5.83333 16.2936 5.83333 15.8333V11.6667ZM6.66667 3.33333C6.20643 3.33333 5.83333 3.70643 5.83333 4.16667V8.33333C5.83333 8.79358 6.20643 9.16667 6.66667 9.16667H16.6667C17.1269 9.16667 17.5 8.79358 17.5 8.33333V4.16667C17.5 3.70643 17.1269 3.33333 16.6667 3.33333H6.66667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default AlignItemLeftFill;
