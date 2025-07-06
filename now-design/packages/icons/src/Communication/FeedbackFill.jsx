import React from 'react';

const FeedbackFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5.37887 15.8333L1.66675 18.75V3.33333C1.66675 2.8731 2.03985 2.5 2.50008 2.5H17.5001C17.9603 2.5 18.3334 2.8731 18.3334 3.33333V15C18.3334 15.4602 17.9603 15.8333 17.5001 15.8333H5.37887ZM9.16675 10.8333V12.5H10.8334V10.8333H9.16675ZM9.16675 5.83333V10H10.8334V5.83333H9.16675Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FeedbackFill;
