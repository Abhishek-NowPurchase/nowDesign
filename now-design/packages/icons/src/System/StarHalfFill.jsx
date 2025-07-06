import React from 'react';

const StarHalfFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0008 13.3067L13.5397 15.2877L12.7493 11.3098L15.7269 8.55625L11.6995 8.0787L10.0008 4.39593V13.3067ZM10.0008 15.2167L4.12295 18.5069L5.43573 11.9L0.490234 7.32658L7.17943 6.53346L10.0008 0.416748L12.8222 6.53346L19.5113 7.32658L14.5659 11.9L15.8787 18.5069L10.0008 15.2167Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default StarHalfFill;
