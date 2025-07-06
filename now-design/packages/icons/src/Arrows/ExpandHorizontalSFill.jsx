import React from 'react';

const ExpandHorizontalSFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M6.20814 5.87516L2.08334 9.99994L6.20607 14.1227L6.20689 10.8333H13.7918L13.7917 14.1243L17.9167 9.99952L13.7919 5.87476L13.7918 9.16661H6.20731L6.20814 5.87516Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ExpandHorizontalSFill;
