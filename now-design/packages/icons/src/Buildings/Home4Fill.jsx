import React from 'react';

const Home4Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.6667 16.6667C16.6667 17.1269 16.2936 17.5 15.8334 17.5H4.16671C3.70647 17.5 3.33337 17.1269 3.33337 16.6667V9.16669H0.833374L9.43946 1.34294C9.75729 1.05398 10.2428 1.05398 10.5606 1.34294L19.1667 9.16669H16.6667V16.6667ZM9.16671 10.8334V15.8334H10.8334V10.8334H9.16671Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Home4Fill;
