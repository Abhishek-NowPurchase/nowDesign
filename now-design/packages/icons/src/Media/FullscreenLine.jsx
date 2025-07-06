import React from 'react';

const FullscreenLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M6.66699 2.5V4.16667H3.33366V7.5H1.66699V2.5H6.66699ZM1.66699 17.5V12.5H3.33366V15.8333H6.66699V17.5H1.66699ZM18.3337 17.5H13.3337V15.8333H16.667V12.5H18.3337V17.5ZM18.3337 7.5H16.667V4.16667H13.3337V2.5H18.3337V7.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FullscreenLine;
