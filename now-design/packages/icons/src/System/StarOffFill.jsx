import React from 'react';

const StarOffFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M19.5113 7.32658L15.0179 11.482L8.09167 4.55573L10.0008 0.416748L12.8222 6.53347L19.5113 7.32658ZM15.519 16.6968L17.6612 18.839L18.8397 17.6605L2.34048 1.16131L1.16197 2.33982L5.54892 6.72679L0.490234 7.32658L5.43573 11.9L4.12295 18.5069L10.0008 15.2168L15.8787 18.5069L15.519 16.6968Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default StarOffFill;
