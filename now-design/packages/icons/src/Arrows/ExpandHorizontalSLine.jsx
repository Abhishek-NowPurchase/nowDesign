import React from 'react';

const ExpandHorizontalSLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M6.20814 5.87529L2.08334 10L6.20607 14.1228L7.38458 12.9443L5.2737 10.8334H14.7257L12.6132 12.9459L13.7917 14.1245L17.9167 9.99971L13.7919 5.87488L12.6133 7.05339L14.7268 9.16671H5.2737L7.38664 7.0538L6.20814 5.87529Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ExpandHorizontalSLine;
