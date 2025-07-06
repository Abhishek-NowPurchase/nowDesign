import React from 'react';

const ArrowUpLongLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.8334 18.3335L9.16684 18.3336V4.857L5.87538 8.14844L4.69687 6.96993L10.0002 1.66663L15.3035 6.96993L14.1249 8.14844L10.8335 4.85696L10.8334 18.3335Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowUpLongLine;
