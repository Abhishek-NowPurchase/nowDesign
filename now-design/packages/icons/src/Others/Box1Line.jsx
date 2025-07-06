import React from 'react';

const Box1Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.99968 0.833374L17.9163 5.41671V14.5834L9.99968 19.1667L2.08301 14.5834V5.41671L9.99968 0.833374ZM4.57791 5.89812L10.8331 9.51954V16.7584L16.2497 13.6225V6.37763L9.99968 2.75921L4.57791 5.89812ZM3.74967 7.34445V13.6225L9.16643 16.7585V10.4805L3.74967 7.34445Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Box1Line;
