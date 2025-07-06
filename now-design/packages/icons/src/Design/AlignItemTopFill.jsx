import React from 'react';

const AlignItemTopFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.5 2.5H2.5V4.16667H17.5V2.5ZM11.6667 5.83333C11.2064 5.83333 10.8333 6.20643 10.8333 6.66667V13.3333C10.8333 13.7936 11.2064 14.1667 11.6667 14.1667H15.8333C16.2936 14.1667 16.6667 13.7936 16.6667 13.3333V6.66667C16.6667 6.20643 16.2936 5.83333 15.8333 5.83333H11.6667ZM3.33333 6.66667C3.33333 6.20643 3.70643 5.83333 4.16667 5.83333H8.33333C8.79358 5.83333 9.16667 6.20643 9.16667 6.66667V16.6667C9.16667 17.1269 8.79358 17.5 8.33333 17.5H4.16667C3.70643 17.5 3.33333 17.1269 3.33333 16.6667V6.66667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default AlignItemTopFill;
