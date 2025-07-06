import React from 'react';

const StarSFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.99967 14.1666L5.10148 17.1584L6.43323 11.5754L2.07422 7.84144L7.79549 7.38277L9.99967 2.08325L12.2039 7.38277L17.9252 7.84144L13.5662 11.5754L14.8979 17.1584L9.99967 14.1666Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default StarSFill;
