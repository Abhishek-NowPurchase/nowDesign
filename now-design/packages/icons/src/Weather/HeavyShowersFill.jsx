import React from 'react';

const HeavyShowersFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.834 15V19.1666H9.16732V15H7.50065V17.5H5.83398V14.79C2.95861 14.0499 0.833984 11.4397 0.833984 8.33329C0.833984 4.65139 3.81875 1.66663 7.50065 1.66663C10.3297 1.66663 12.7472 3.42884 13.7153 5.91549C13.9966 5.86154 14.287 5.83329 14.584 5.83329C17.1153 5.83329 19.1673 7.88532 19.1673 10.4166C19.1673 12.948 17.1153 15 14.584 15H14.1673V17.5H12.5007V15H10.834Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default HeavyShowersFill;
