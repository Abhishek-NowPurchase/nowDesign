import React from 'react';

const ArrowUpDoubleLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10 4.02991L4.82742 9.20247L6.00593 10.381L10 6.38692L13.9941 10.381L15.1726 9.20247L10 4.02991ZM10 8.73814L4.82742 13.9107L6.00593 15.0892L10 11.0951L13.9941 15.0892L15.1726 13.9107L10 8.73814Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowUpDoubleLine;
