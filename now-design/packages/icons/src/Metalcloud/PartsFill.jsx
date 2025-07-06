import React from 'react';

const PartsFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1654 9.99984L14.582 2.06128H5.41537L0.832031 9.99984L5.41537 17.9384H14.582L19.1654 9.99984ZM8.63769 5.9747L7.19434 6.80803L11.361 14.0249L12.8044 13.1915L8.63769 5.9747Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PartsFill;
