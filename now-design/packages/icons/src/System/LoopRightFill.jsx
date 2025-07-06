import React from 'react';

const LoopRightFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0003 3.33329C12.1591 3.33329 14.0786 4.35873 15.2981 5.95224L13.3337 7.91663H18.3337V2.91663L16.4848 4.76548C14.9582 2.87663 12.6207 1.66663 10.0003 1.66663C5.39795 1.66663 1.66699 5.39758 1.66699 9.99996H3.33366C3.33366 6.31806 6.31842 3.33329 10.0003 3.33329ZM16.667 9.99996C16.667 13.6819 13.6822 16.6666 10.0003 16.6666C7.84158 16.6666 5.92203 15.6412 4.70261 14.0477L6.66699 12.0833H1.66699V17.0833L3.51585 15.2345C5.04251 17.1233 7.37997 18.3333 10.0003 18.3333C14.6027 18.3333 18.3337 14.6023 18.3337 9.99996H16.667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default LoopRightFill;
