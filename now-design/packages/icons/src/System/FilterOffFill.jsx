import React from 'react';

const FilterOffFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5.77411 0.428833L17.5593 12.214L16.3808 13.3925L13.195 10.2071L11.6667 12.4999V18.3332H8.33333V12.4999L3.33333 4.9999H2.5V3.33323L6.32083 3.333L4.5956 1.60734L5.77411 0.428833ZM17.5 3.33323V4.9999H16.6667L15.0708 7.39323L11.0108 3.33323H17.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FilterOffFill;
