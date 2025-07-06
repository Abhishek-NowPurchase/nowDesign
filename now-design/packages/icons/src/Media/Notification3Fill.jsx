import React from 'react';

const Notification3Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.667 14.1666H18.3337V15.8333H1.66699V14.1666H3.33366V8.33329C3.33366 4.65139 6.31842 1.66663 10.0003 1.66663C13.6822 1.66663 16.667 4.65139 16.667 8.33329V14.1666ZM7.50032 17.5H12.5003V19.1666H7.50032V17.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Notification3Fill;
