import React from 'react';

const StarFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0008 15.2167L4.12295 18.5069L5.43573 11.9L0.490234 7.32658L7.17943 6.53346L10.0008 0.416748L12.8222 6.53346L19.5113 7.32658L14.5659 11.9L15.8787 18.5069L10.0008 15.2167Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default StarFill;
