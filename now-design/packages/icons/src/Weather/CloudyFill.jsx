import React from 'react';

const CloudyFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M7.50065 17.488C3.78258 17.2723 0.833984 14.1889 0.833984 10.4167C0.833984 6.50469 4.0053 3.33337 7.91732 3.33337C10.4534 3.33337 12.6782 4.6662 13.9295 6.66961C16.8382 6.76397 19.1673 9.15171 19.1673 12.0834C19.1673 14.9347 16.9642 17.2715 14.1673 17.4843V17.5H7.50065V17.488Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CloudyFill;
