import React from 'react';

const AddLargeFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.16699 9.16679V1.66712L10.8337 1.66711V9.16679L18.3337 9.16662L18.3338 10.8333L10.8337 10.8335L10.8337 18.3334H9.16708V10.8335L1.66703 10.8336L1.66699 9.16696L9.16699 9.16679Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default AddLargeFill;
