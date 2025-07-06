import React from 'react';

const MacbookLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.3335 4.16667V13.3333H16.6668V4.16667H3.3335ZM1.66683 3.33957C1.66683 2.87589 2.04625 2.5 2.49333 2.5H17.507C17.9635 2.5 18.3335 2.8741 18.3335 3.33957V15H1.66683V3.33957ZM0.833496 15.8333H19.1668V17.5H0.833496V15.8333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MacbookLine;
