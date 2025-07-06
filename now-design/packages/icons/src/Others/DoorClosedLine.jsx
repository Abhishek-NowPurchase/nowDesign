import React from 'react';

const DoorClosedLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.49805 17.5V15.8333H4.16471V3.33333C4.16471 2.8731 4.53781 2.5 4.99805 2.5H14.998C15.4583 2.5 15.8313 2.8731 15.8313 3.33333V15.8333H17.498V17.5H2.49805ZM14.1647 4.16667H5.83138V15.8333H14.1647V4.16667ZM12.498 9.16667V10.8333H10.8313V9.16667H12.498Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default DoorClosedLine;
