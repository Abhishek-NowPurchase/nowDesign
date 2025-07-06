import React from 'react';

const MicrosoftLoopFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M18.3337 9.99996C18.3337 14.6023 14.6027 18.3333 10.0003 18.3333H5.55426C7.23747 17.1232 8.33366 15.148 8.33366 12.9166H10.0003C11.6112 12.9166 12.917 11.6108 12.917 9.99996C12.917 8.38912 11.6112 7.08329 10.0003 7.08329C8.38949 7.08329 7.08366 8.38912 7.08366 9.99996V12.9166C7.08366 15.9082 4.65853 18.3333 1.66699 18.3333V9.99996C1.66699 5.39758 5.39795 1.66663 10.0003 1.66663C14.6027 1.66663 18.3337 5.39758 18.3337 9.99996Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MicrosoftLoopFill;
