import React from 'react';

const MedicalDislikeFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.33965 1.16113L17.6603 16.4818L16.4818 17.6603L13.3595 14.5378L9.99984 17.9041L2.93446 10.8275C1.23472 8.92446 1.24408 6.03342 2.96254 4.14129L1.16113 2.33965L2.33965 1.16113ZM16.8688 3.96443C18.7543 5.8539 18.8191 8.86413 17.0655 10.8275L15.7033 12.1908L6.05017 2.53789C7.44089 2.36609 8.89001 2.77804 10.0008 3.77374C11.9583 2.01663 14.9833 2.07497 16.8688 3.96443Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MedicalDislikeFill;
