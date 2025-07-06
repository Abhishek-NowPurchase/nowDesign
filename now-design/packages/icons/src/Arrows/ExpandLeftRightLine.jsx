import React from 'react';

const ExpandLeftRightLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M7.53586 4.82739L2.36328 10L7.53586 15.1726L8.71441 13.994L4.7203 10L8.71441 6.0059L7.53586 4.82739ZM12.4642 15.1727L17.6367 10.0001L12.4642 4.82752L11.2856 6.00603L15.2797 10.0001L11.2856 13.9942L12.4642 15.1727Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ExpandLeftRightLine;
