import React from 'react';

const LoopRightLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0003 3.33329C12.2908 3.33329 14.3127 4.48851 15.5133 6.24996H13.3337V7.91663H18.3337V2.91663H16.667V4.99943C15.1472 2.97634 12.7273 1.66663 10.0003 1.66663C5.39795 1.66663 1.66699 5.39758 1.66699 9.99996H3.33366C3.33366 6.31806 6.31842 3.33329 10.0003 3.33329ZM16.667 9.99996C16.667 13.6819 13.6822 16.6666 10.0003 16.6666C7.70986 16.6666 5.68789 15.5114 4.48735 13.75H6.66699V12.0833H1.66699V17.0833H3.33366V15.0005C4.8535 17.0235 7.27336 18.3333 10.0003 18.3333C14.6027 18.3333 18.3337 14.6023 18.3337 9.99996H16.667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default LoopRightLine;
