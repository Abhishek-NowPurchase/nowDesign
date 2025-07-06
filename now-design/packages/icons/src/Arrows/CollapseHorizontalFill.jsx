import React from 'react';

const CollapseHorizontalFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M11.25 10L15.3748 5.87529L15.374 9.16671H19.1667V10.8334H15.3736L15.3728 14.1228L11.25 10ZM0.833332 10.8334H4.62511L4.62504 14.1245L8.75 9.99971L4.62521 5.87488L4.62514 9.16671H0.833332V10.8334Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CollapseHorizontalFill;
