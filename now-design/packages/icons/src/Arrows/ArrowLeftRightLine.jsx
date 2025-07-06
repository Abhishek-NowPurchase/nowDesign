import React from 'react';

const ArrowLeftRightLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.3752 10.0415L17.5 14.1663L13.3752 18.291L12.1967 17.1125L14.31 14.999L3.33333 14.9996V13.333L14.31 13.3323L12.1967 11.22L13.3752 10.0415ZM6.62479 1.70813L7.8033 2.88665L5.69 4.99896L16.6667 4.99959V6.66626L5.69 6.66563L7.8033 8.77921L6.62479 9.95771L2.5 5.83292L6.62479 1.70813Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowLeftRightLine;
