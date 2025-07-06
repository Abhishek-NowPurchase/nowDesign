import React from 'react';

const Loader5Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10 2.5C14.1422 2.5 17.5 5.85787 17.5 10H15.8333C15.8333 6.77834 13.2217 4.16667 10 4.16667V2.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Loader5Line;
