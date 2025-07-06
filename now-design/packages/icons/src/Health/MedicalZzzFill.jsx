import React from 'react';

const MedicalZzzFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.16667 9.16667V10.8333L4.72714 15.8333H9.16667V17.5H2.5V15.8333L6.93797 10.8333H2.5V9.16667H9.16667ZM17.5 2.5V4.16667L13.0605 9.16667H17.5V10.8333H10.8333V9.16667L15.2713 4.16667H10.8333V2.5H17.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MedicalZzzFill;
