import React from 'react';

const ResetRightFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M1.66699 9.99996C1.66699 14.6023 5.39795 18.3333 10.0003 18.3333C14.6027 18.3333 18.3337 14.6023 18.3337 9.99996C18.3337 5.39758 14.6027 1.66663 10.0003 1.66663V3.33329C13.6822 3.33329 16.667 6.31806 16.667 9.99996C16.667 13.6819 13.6822 16.6666 10.0003 16.6666C6.31842 16.6666 3.33366 13.6819 3.33366 9.99996C3.33366 7.94674 4.26185 6.11032 5.72152 4.88739L7.50032 6.66663V1.66663H2.50033L4.53906 3.70543C2.77957 5.23331 1.66699 7.48671 1.66699 9.99996Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ResetRightFill;
