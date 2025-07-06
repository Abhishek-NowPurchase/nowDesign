import React from 'react';

const UnsplashFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M7.08431 9.16667V13.3333H12.9177V9.16667H17.501V17.5H2.50098V9.16667H7.08431ZM12.9177 2.5V6.66667H7.08431V2.5H12.9177Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default UnsplashFill;
