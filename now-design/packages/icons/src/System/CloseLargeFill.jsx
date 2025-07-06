import React from 'react';

const CloseLargeFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M8.82223 10L2.32812 3.5059L3.50663 2.32739L10.0007 8.82143L16.4948 2.32739L17.6733 3.5059L11.1792 10L17.6733 16.494L16.4948 17.6726L10.0007 11.1785L3.50663 17.6726L2.32812 16.494L8.82223 10Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CloseLargeFill;
