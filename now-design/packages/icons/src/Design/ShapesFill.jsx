import React from 'react';

const ShapesFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.99992 0.833374L15.0001 9.16671H5.00008L9.99992 0.833374ZM10.8334 11.25H17.5001V17.9167H10.8334V11.25ZM5.62508 18.3334C7.81121 18.3334 9.58342 16.5612 9.58342 14.375C9.58342 12.1889 7.81121 10.4167 5.62508 10.4167C3.43896 10.4167 1.66675 12.1889 1.66675 14.375C1.66675 16.5612 3.43896 18.3334 5.62508 18.3334Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ShapesFill;
