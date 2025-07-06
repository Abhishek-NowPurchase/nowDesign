import React from 'react';

const MedicalHeartPulseFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.7503 2.5C16.2817 2.5 18.3337 4.58333 18.3337 7.5C18.3337 13.3333 12.0837 16.6667 10.0003 17.9167C8.35232 16.9279 4.0972 14.6355 2.39074 10.8333H6.30548L7.08366 9.53642L9.58366 13.7031L11.3055 10.8333H14.167V9.16667H10.3618L9.58366 10.4636L7.08366 6.29696L5.36183 9.16667L1.84219 9.16658C1.72881 8.6355 1.66699 8.08012 1.66699 7.5C1.66699 4.58333 3.75033 2.5 6.25032 2.5C7.8003 2.5 9.16699 3.33333 10.0003 4.16667C10.8337 3.33333 12.2003 2.5 13.7503 2.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MedicalHeartPulseFill;
