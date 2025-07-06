import React from 'react';

const MedicalAedFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5 2.5C3.61929 2.5 2.5 3.61929 2.5 5V15C2.5 16.3807 3.61929 17.5 5 17.5H15C16.3807 17.5 17.5 16.3807 17.5 15V5C17.5 3.61929 16.3807 2.5 15 2.5H5ZM13.3333 9.16667L9.16667 15V10.8333H6.66667L10.8333 5V9.16667H13.3333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MedicalAedFill;
