import React from 'react';

const Loader3Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.5459 10.8333H4.22587C4.63022 13.6602 7.0614 15.8333 10.0002 15.8333C12.9388 15.8333 15.37 13.6602 15.7744 10.8333H17.4543C17.0398 14.5833 13.8606 17.5 10.0002 17.5C6.13967 17.5 2.96043 14.5833 2.5459 10.8333ZM2.5459 9.16667C2.96043 5.41671 6.13967 2.5 10.0002 2.5C13.8606 2.5 17.0398 5.41671 17.4543 9.16667H15.7744C15.37 6.33976 12.9388 4.16667 10.0002 4.16667C7.0614 4.16667 4.63022 6.33976 4.22587 9.16667H2.5459Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Loader3Fill;
