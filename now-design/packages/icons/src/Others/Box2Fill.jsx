import React from 'react';

const Box2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.99968 0.833374L17.9163 5.41671V14.5834L9.99968 19.1667L2.08301 14.5834V5.41671L9.99968 0.833374ZM3.74967 6.38161V13.6225L9.99968 17.2409V10L3.74967 6.38161Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Box2Fill;
