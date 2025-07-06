import React from 'react';

const MenuFold3Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M21 4H7V6H21V4ZM21 11H11V13H21V11ZM21 18H7V20H21V18ZM8 17V7L3 11.9996L8 17Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MenuFold3Fill;
