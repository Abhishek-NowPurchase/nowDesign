import React from 'react';

const CollapseHorizontalLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M11.25 10L15.3748 5.87529L16.5533 7.0538L14.4403 9.16671H19.1667V10.8334H14.4403L16.5513 12.9443L15.3728 14.1228L11.25 10ZM0.833334 10.8334H5.55903L3.44653 12.9459L4.62504 14.1245L8.75 9.99971L4.62521 5.87488L3.4467 7.05339L5.56005 9.16671H0.833334V10.8334Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CollapseHorizontalLine;
