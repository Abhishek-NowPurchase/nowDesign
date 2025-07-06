import React from 'react';

const MedicalHeartFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0012 3.77378C11.9587 2.01667 14.9837 2.075 16.8692 3.96447C18.7547 5.85393 18.8195 8.86417 17.0658 10.8275L10.0002 17.9042L2.93481 10.8275C1.1812 8.86417 1.24675 5.84918 3.13146 3.96447C5.0183 2.07763 8.03798 2.01406 10.0012 3.77378Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MedicalHeartFill;
