import React from 'react';

const HonourLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.4999 3.33329V15.6012C17.4999 15.766 17.4027 15.9155 17.2519 15.9822L9.99992 19.1927L2.74791 15.9822C2.59714 15.9155 2.49992 15.766 2.49992 15.6012V3.33329H0.833252V1.66663H19.1666V3.33329H17.4999ZM4.16659 3.33329V14.7875L9.99992 17.37L15.8333 14.7875V3.33329H4.16659ZM6.66659 6.66663H13.3333V8.33329H6.66659V6.66663ZM6.66659 9.99996H13.3333V11.6666H6.66659V9.99996Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default HonourLine;
