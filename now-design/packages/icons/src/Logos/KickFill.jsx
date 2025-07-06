import React from 'react';

const KickFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.5 2.5H17.5V17.5H2.5V2.5ZM8.80308 4.61344H5.2121V15.3862H8.80308V12.9922H10.0001V14.1892H11.197V15.3862H14.7879V11.7952H13.5909V10.5983H12.394V9.40133H13.5909V8.20433H14.7879V4.61344H11.197V5.81041H10.0001V7.00737H8.80308V4.61344Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default KickFill;
