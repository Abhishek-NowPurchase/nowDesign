import React from 'react';

const AlignItemLeftLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.5 17.5V2.5H4.16667V17.5H2.5ZM7.5 12.5H12.5V15H7.5V12.5ZM6.66667 10.8333C6.20643 10.8333 5.83333 11.2064 5.83333 11.6667V15.8333C5.83333 16.2936 6.20643 16.6667 6.66667 16.6667H13.3333C13.7936 16.6667 14.1667 16.2936 14.1667 15.8333V11.6667C14.1667 11.2064 13.7936 10.8333 13.3333 10.8333H6.66667ZM7.5 7.5H15.8333V5H7.5V7.5ZM5.83333 4.16667C5.83333 3.70643 6.20643 3.33333 6.66667 3.33333H16.6667C17.1269 3.33333 17.5 3.70643 17.5 4.16667V8.33333C17.5 8.79358 17.1269 9.16667 16.6667 9.16667H6.66667C6.20643 9.16667 5.83333 8.79358 5.83333 8.33333V4.16667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default AlignItemLeftLine;
