import React from 'react';

const CodeFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M19.1668 9.99995L13.2742 15.8925L12.0957 14.714L16.8098 9.99995L12.0957 5.28593L13.2742 4.10742L19.1668 9.99995ZM3.19052 9.99995L7.90456 14.714L6.72605 15.8925L0.833496 9.99995L6.72605 4.10742L7.90456 5.28593L3.19052 9.99995Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CodeFill;
