import React from 'react';

const Notification2Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M18.3337 16.6666H1.66699V15H2.50033V9.19279C2.50033 5.03619 5.85819 1.66663 10.0003 1.66663C14.1425 1.66663 17.5003 5.03619 17.5003 9.19279V15H18.3337V16.6666ZM4.16699 15H15.8337V9.19279C15.8337 5.95668 13.222 3.33329 10.0003 3.33329C6.77867 3.33329 4.16699 5.95668 4.16699 9.19279V15ZM7.91699 17.5H12.0837C12.0837 18.6505 11.1509 19.5833 10.0003 19.5833C8.84974 19.5833 7.91699 18.6505 7.91699 17.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Notification2Line;
