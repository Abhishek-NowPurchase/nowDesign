import React from 'react';

const ArrowRightUpFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.8757 10.3008L6.16163 15.0149L4.98312 13.8364L9.69717 9.12233L5.57237 4.99756H15.0005V14.4257L10.8757 10.3008Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowRightUpFill;
