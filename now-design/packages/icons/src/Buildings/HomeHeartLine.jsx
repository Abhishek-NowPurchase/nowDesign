import React from 'react';

const HomeHeartLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.6667 16.6667C16.6667 17.1269 16.2936 17.5 15.8334 17.5H4.16671C3.70647 17.5 3.33337 17.1269 3.33337 16.6667V9.16669H0.833374L9.43946 1.34294C9.75729 1.05398 10.2428 1.05398 10.5606 1.34294L19.1667 9.16669H16.6667V16.6667ZM15 15.8334V7.63123L10 3.08577L5.00004 7.63123V15.8334H15ZM10 14.1667L7.20108 11.3677C6.46884 10.6354 6.46884 9.44827 7.20108 8.71602C7.93331 7.98382 9.12046 7.98382 9.85271 8.71602L10 8.86336L10.1474 8.71602C10.8796 7.98382 12.0668 7.98382 12.799 8.71602C13.5312 9.44827 13.5312 10.6354 12.799 11.3677L10 14.1667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default HomeHeartLine;
