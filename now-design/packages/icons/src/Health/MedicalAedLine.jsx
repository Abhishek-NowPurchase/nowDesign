import React from 'react';

const MedicalAedLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5 4.16667C4.53977 4.16667 4.16667 4.53977 4.16667 5V15C4.16667 15.4602 4.53977 15.8333 5 15.8333H15C15.4602 15.8333 15.8333 15.4602 15.8333 15V5C15.8333 4.53977 15.4602 4.16667 15 4.16667H5ZM2.5 5C2.5 3.61929 3.61929 2.5 5 2.5H15C16.3807 2.5 17.5 3.61929 17.5 5V15C17.5 16.3807 16.3807 17.5 15 17.5H5C3.61929 17.5 2.5 16.3807 2.5 15V5ZM13.3333 9.16667H10.8333V5L6.66667 10.8333H9.16667V15L13.3333 9.16667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MedicalAedLine;
