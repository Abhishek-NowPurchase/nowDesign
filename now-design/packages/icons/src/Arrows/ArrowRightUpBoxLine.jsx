import React from 'react';

const ArrowRightUpBoxLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.6667 2.5H3.33333C2.8731 2.5 2.5 2.8731 2.5 3.33333V16.6667C2.5 17.1269 2.8731 17.5 3.33333 17.5H16.6667C17.1269 17.5 17.5 17.1269 17.5 16.6667V3.33333C17.5 2.8731 17.1269 2.5 16.6667 2.5ZM4.16667 15.8333V4.16667H15.8333V15.8333H4.16667ZM13.3333 6.66667V13.3333H11.6667V9.51183L7.25593 13.9226L6.07741 12.7441L10.4882 8.33333H6.66667V6.66667H13.3333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowRightUpBoxLine;
