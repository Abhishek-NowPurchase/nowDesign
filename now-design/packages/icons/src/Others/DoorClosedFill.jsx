import React from 'react';

const DoorClosedFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.49805 17.5V15.8333H4.16471V3.33333C4.16471 2.8731 4.53781 2.5 4.99805 2.5H14.998C15.4583 2.5 15.8313 2.8731 15.8313 3.33333V15.8333H17.498V17.5H2.49805ZM12.498 9.16667H10.8313V10.8333H12.498V9.16667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default DoorClosedFill;
