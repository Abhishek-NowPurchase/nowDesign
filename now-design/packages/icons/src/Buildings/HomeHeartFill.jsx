import React from 'react';

const HomeHeartFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.6667 16.6667C16.6667 17.1269 16.2936 17.5 15.8334 17.5H4.16671C3.70647 17.5 3.33337 17.1269 3.33337 16.6667V9.16669H0.833374L9.43946 1.34294C9.75729 1.05398 10.2428 1.05398 10.5606 1.34294L19.1667 9.16669H16.6667V16.6667ZM10 14.1667L12.799 11.3677C13.5312 10.6354 13.5312 9.44827 12.799 8.71602C12.0668 7.98382 10.8796 7.98382 10.1474 8.71602L10 8.86336L9.85271 8.71602C9.12046 7.98382 7.93331 7.98382 7.20108 8.71602C6.46884 9.44827 6.46884 10.6354 7.20108 11.3677L10 14.1667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default HomeHeartFill;
