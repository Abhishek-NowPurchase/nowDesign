import React from 'react';

const AddLargeLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.8337 9.16659L18.3338 9.16642V10.8331L10.8337 10.8333V18.3332H9.16708V10.8333L1.66703 10.8334L1.66699 9.16675L9.16708 9.16659L9.16699 1.66688L10.8337 1.66687L10.8337 9.16659Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default AddLargeLine;
