import React from 'react';

const DoorLockFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0003 18.3333C5.39795 18.3333 1.66699 14.6023 1.66699 9.99996C1.66699 5.39758 5.39795 1.66663 10.0003 1.66663C14.6027 1.66663 18.3337 5.39758 18.3337 9.99996C18.3337 14.6023 14.6027 18.3333 10.0003 18.3333ZM9.16699 10.66V13.3333H10.8337V10.66C11.5695 10.3385 12.0837 9.60429 12.0837 8.74996C12.0837 7.59937 11.1509 6.66663 10.0003 6.66663C8.84974 6.66663 7.91699 7.59937 7.91699 8.74996C7.91699 9.60429 8.43116 10.3385 9.16699 10.66Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default DoorLockFill;
