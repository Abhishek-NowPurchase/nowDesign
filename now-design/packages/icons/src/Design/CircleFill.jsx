import React from 'react';

const CircleFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0001 18.3333C14.6024 18.3333 18.3334 14.6023 18.3334 9.99996C18.3334 5.39758 14.6024 1.66663 10.0001 1.66663C5.39771 1.66663 1.66675 5.39758 1.66675 9.99996C1.66675 14.6023 5.39771 18.3333 10.0001 18.3333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CircleFill;
