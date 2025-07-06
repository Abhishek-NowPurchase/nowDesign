import React from 'react';

const NotificationFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10 1.66663C14.1422 1.66663 17.5 5.03619 17.5 9.19279V16.6666H2.5V9.19279C2.5 5.03619 5.85787 1.66663 10 1.66663ZM7.91667 17.5H12.0833C12.0833 18.6505 11.1506 19.5833 10 19.5833C8.84942 19.5833 7.91667 18.6505 7.91667 17.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default NotificationFill;
