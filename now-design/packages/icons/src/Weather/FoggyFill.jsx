import React from 'react';

const FoggyFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M1.3209 10.839C1.00693 10.0655 0.833984 9.21954 0.833984 8.33329C0.833984 4.65139 3.81875 1.66663 7.50065 1.66663C10.3297 1.66663 12.7472 3.42884 13.7153 5.91549C13.9966 5.86154 14.287 5.83329 14.584 5.83329C17.1153 5.83329 19.1673 7.88532 19.1673 10.4166C19.1673 10.559 19.1608 10.6999 19.1482 10.839H1.3209ZM3.33398 15.8333H17.5007V17.5H3.33398V15.8333ZM1.66732 12.5H19.1673V14.1666H1.66732V12.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FoggyFill;
