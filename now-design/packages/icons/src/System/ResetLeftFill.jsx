import React from 'react';

const ResetLeftFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M18.3327 9.99996C18.3327 14.6023 14.6018 18.3333 9.99935 18.3333C5.39702 18.3333 1.66602 14.6023 1.66602 9.99996C1.66602 5.39758 5.39702 1.66663 9.99935 1.66663V3.33329C6.31743 3.33329 3.33268 6.31806 3.33268 9.99996C3.33268 13.6819 6.31743 16.6666 9.99935 16.6666C13.6813 16.6666 16.666 13.6819 16.666 9.99996C16.666 7.94674 15.7378 6.11032 14.2782 4.88739L12.4993 6.66663V1.66663H17.4993L15.4606 3.70543C17.2201 5.23331 18.3327 7.48671 18.3327 9.99996Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ResetLeftFill;
