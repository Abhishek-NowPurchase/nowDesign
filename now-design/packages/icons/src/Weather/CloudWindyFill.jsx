import React from 'react';

const CloudWindyFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M11.6673 15.8333V12.5057H1.72918C1.15989 11.5238 0.833984 10.3833 0.833984 9.16667C0.833984 5.48477 3.81875 2.5 7.50065 2.5C10.3297 2.5 12.7472 4.26222 13.7153 6.74887C13.9966 6.69492 14.287 6.66667 14.584 6.66667C17.1153 6.66667 19.1673 8.71867 19.1673 11.25C19.1673 13.7813 17.1153 15.8333 14.584 15.8333H11.6673ZM5.00065 17.5H13.334V19.1667H5.00065V17.5ZM1.66732 14.1667H10.0007V15.8333H1.66732V14.1667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CloudWindyFill;
