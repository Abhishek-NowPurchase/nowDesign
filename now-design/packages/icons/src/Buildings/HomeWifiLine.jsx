import React from 'react';

const HomeWifiLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5.00004 15.8334H15V7.63123L10 3.08577L5.00004 7.63123V15.8334ZM15.8334 17.5H4.16671C3.70647 17.5 3.33337 17.1269 3.33337 16.6667V9.16669H0.833374L9.43946 1.34294C9.75729 1.05398 10.2428 1.05398 10.5606 1.34294L19.1667 9.16669H16.6667V16.6667C16.6667 17.1269 16.2936 17.5 15.8334 17.5ZM6.66671 8.33334C9.88838 8.33334 12.5 10.945 12.5 14.1667H10.8334C10.8334 11.8655 8.96787 10 6.66671 10V8.33334ZM6.66671 11.6667C8.04742 11.6667 9.16671 12.7859 9.16671 14.1667H6.66671V11.6667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default HomeWifiLine;
