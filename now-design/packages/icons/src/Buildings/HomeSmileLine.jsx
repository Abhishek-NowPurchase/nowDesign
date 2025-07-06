import React from 'react';

const HomeSmileLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.99998 15.8334H15V7.63123L9.99998 3.08577L4.99998 7.63123V15.8334ZM15.8333 17.5H4.16665C3.70641 17.5 3.33331 17.1269 3.33331 16.6667V9.16669H0.833313L9.4394 1.34294C9.75723 1.05398 10.2427 1.05398 10.5606 1.34294L19.1666 9.16669H16.6666V16.6667C16.6666 17.1269 16.2936 17.5 15.8333 17.5ZM6.24998 10.8334H7.91665C7.91665 11.9839 8.8494 12.9167 9.99998 12.9167C11.1506 12.9167 12.0833 11.9839 12.0833 10.8334H13.75C13.75 12.9044 12.0711 14.5834 9.99998 14.5834C7.92891 14.5834 6.24998 12.9044 6.24998 10.8334Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default HomeSmileLine;
