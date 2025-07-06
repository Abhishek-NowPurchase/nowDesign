import React from 'react';

const SideBarFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.49935 2.5H17.4993C17.9596 2.5 18.3327 2.8731 18.3327 3.33333V16.6667C18.3327 17.1269 17.9596 17.5 17.4993 17.5H2.49935C2.03912 17.5 1.66602 17.1269 1.66602 16.6667V3.33333C1.66602 2.8731 2.03912 2.5 2.49935 2.5ZM7.49935 4.16667V15.8333H16.666V4.16667H7.49935Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SideBarFill;
