import React from 'react';

const NpmjsFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.6677 2.5C17.1279 2.5 17.501 2.8731 17.501 3.33333V16.6667C17.501 17.1269 17.1279 17.5 16.6677 17.5H3.33431C2.87407 17.5 2.50098 17.1269 2.50098 16.6667V3.33333C2.50098 2.8731 2.87407 2.5 3.33431 2.5H16.6677ZM14.1677 5.83333H5.83431V14.1667H10.001V7.91667H12.0843V14.1667H14.1677V5.83333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default NpmjsFill;
