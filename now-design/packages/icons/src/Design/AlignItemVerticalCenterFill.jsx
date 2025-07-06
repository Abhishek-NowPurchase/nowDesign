import React from 'react';

const AlignItemVerticalCenterFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33341 15.8334C3.33341 16.2936 3.70651 16.6667 4.16675 16.6667H8.33341C8.79366 16.6667 9.16675 16.2936 9.16675 15.8334V10.8334H10.8334V14.1667C10.8334 14.627 11.2065 15 11.6667 15H15.8334C16.2937 15 16.6667 14.627 16.6667 14.1667V10.8334H18.3334V9.16671H16.6667V5.83337C16.6667 5.37314 16.2937 5.00004 15.8334 5.00004H11.6667C11.2065 5.00004 10.8334 5.37314 10.8334 5.83337V9.16671H9.16675V4.16671C9.16675 3.70647 8.79366 3.33337 8.33341 3.33337H4.16675C3.70651 3.33337 3.33341 3.70647 3.33341 4.16671V9.16671H1.66675V10.8334H3.33341V15.8334Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default AlignItemVerticalCenterFill;
