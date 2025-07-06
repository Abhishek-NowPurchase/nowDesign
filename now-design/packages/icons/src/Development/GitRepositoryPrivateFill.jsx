import React from 'react';

const GitRepositoryPrivateFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15 6.66671H16.6667C17.1269 6.66671 17.5 7.03981 17.5 7.50004V17.5C17.5 17.9603 17.1269 18.3334 16.6667 18.3334H3.33333C2.8731 18.3334 2.5 17.9603 2.5 17.5V7.50004C2.5 7.03981 2.8731 6.66671 3.33333 6.66671H5V5.83337C5 3.07195 7.23857 0.833374 10 0.833374C12.7614 0.833374 15 3.07195 15 5.83337V6.66671ZM13.3333 6.66671V5.83337C13.3333 3.99242 11.8409 2.50004 10 2.50004C8.15905 2.50004 6.66667 3.99242 6.66667 5.83337V6.66671H13.3333ZM5.83333 9.16671V10.8334H7.5V9.16671H5.83333ZM5.83333 11.6667V13.3334H7.5V11.6667H5.83333ZM5.83333 14.1667V15.8334H7.5V14.1667H5.83333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default GitRepositoryPrivateFill;
