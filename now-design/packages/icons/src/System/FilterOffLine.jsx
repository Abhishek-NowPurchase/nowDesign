import React from 'react';

const FilterOffLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5.77411 0.428833L17.5593 12.214L16.3808 13.3925L13.195 10.2071L12.5 11.2499V18.3332H7.5V11.2499L3.33333 4.9999H2.5V3.33323L6.32083 3.333L4.5956 1.60734L5.77411 0.428833ZM7.9875 4.99967L5.33642 4.9999L9.16667 10.7453V16.6665H10.8333V10.7453L11.9933 9.00546L7.9875 4.99967ZM17.5 3.33323V4.9999H16.6667L15.0708 7.39323L13.8692 6.19073L14.6636 4.9999H12.6775L11.0108 3.33323H17.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FilterOffLine;
