import React from 'react';

const LayoutTop2Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.4998 2.5C17.9601 2.5 18.3332 2.8731 18.3332 3.33333V16.6667C18.3332 17.1269 17.9601 17.5 17.4998 17.5H2.49984C2.0396 17.5 1.6665 17.1269 1.6665 16.6667V3.33333C1.6665 2.8731 2.0396 2.5 2.49984 2.5H17.4998ZM16.6665 4.16667H3.33317V15.8333H16.6665V4.16667ZM14.9998 5.83333V7.5H4.99984V5.83333H14.9998Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default LayoutTop2Line;
