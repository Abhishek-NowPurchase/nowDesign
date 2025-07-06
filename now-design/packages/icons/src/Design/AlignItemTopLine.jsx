import React from 'react';

const AlignItemTopLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.5 2.5H2.5V4.16667H17.5V2.5ZM12.5 7.5V12.5H15V7.5H12.5ZM10.8333 6.66667C10.8333 6.20643 11.2064 5.83333 11.6667 5.83333H15.8333C16.2936 5.83333 16.6667 6.20643 16.6667 6.66667V13.3333C16.6667 13.7936 16.2936 14.1667 15.8333 14.1667H11.6667C11.2064 14.1667 10.8333 13.7936 10.8333 13.3333V6.66667ZM7.5 7.5V15.8333H5V7.5H7.5ZM4.16667 5.83333C3.70643 5.83333 3.33333 6.20643 3.33333 6.66667V16.6667C3.33333 17.1269 3.70643 17.5 4.16667 17.5H8.33333C8.79358 17.5 9.16667 17.1269 9.16667 16.6667V6.66667C9.16667 6.20643 8.79358 5.83333 8.33333 5.83333H4.16667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default AlignItemTopLine;
