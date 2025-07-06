import React from 'react';

const FilterFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.5 3.33337V5.00004H16.6667L11.6667 12.5V18.3334H8.33333V12.5L3.33333 5.00004H2.5V3.33337H17.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FilterFill;
