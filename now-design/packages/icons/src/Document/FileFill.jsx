import React from 'react';

const FileFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.5 6.66663L7.50266 1.66663H16.6648C17.1261 1.66663 17.5 2.04605 17.5 2.49313V17.5068C17.5 17.9633 17.1292 18.3333 16.6722 18.3333H3.32783C2.87063 18.3333 2.5 17.9584 2.5 17.4943V6.66663ZM8.33333 2.91663L3.75 7.49996H8.33333V2.91663Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FileFill;
