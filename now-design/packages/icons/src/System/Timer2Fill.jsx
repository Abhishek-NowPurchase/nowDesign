import React from 'react';

const Timer2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0003 1.66675C14.6003 1.66675 18.3337 5.40008 18.3337 10.0001C18.3337 14.6001 14.6003 18.3334 10.0003 18.3334C5.40032 18.3334 1.66699 14.6001 1.66699 10.0001C1.66699 5.40008 5.40032 1.66675 10.0003 1.66675ZM12.9466 5.87529L8.82182 10.0001L10.0003 11.1786L14.1251 7.05381L12.9466 5.87529Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Timer2Fill;
