import React from 'react';

const SearchFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15.0262 13.8473L18.5951 17.4162L17.4166 18.5947L13.8477 15.0258C12.5644 16.0525 10.937 16.6666 9.16699 16.6666C5.02699 16.6666 1.66699 13.3066 1.66699 9.16663C1.66699 5.02663 5.02699 1.66663 9.16699 1.66663C13.307 1.66663 16.667 5.02663 16.667 9.16663C16.667 10.9366 16.0528 12.564 15.0262 13.8473Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SearchFill;
