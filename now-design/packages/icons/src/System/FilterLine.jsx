import React from 'react';

const FilterLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.5 3.33337V5.00004H16.6667L12.5 11.25V18.3334H7.5V11.25L3.33333 5.00004H2.5V3.33337H17.5ZM5.33642 5.00004L9.16667 10.7454V16.6667H10.8333V10.7454L14.6636 5.00004H5.33642Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FilterLine;
