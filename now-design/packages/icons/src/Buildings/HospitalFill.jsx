import React from 'react';

const HospitalFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.5 16.6666H19.1666V18.3333H0.833313V16.6666H2.49998V2.49996C2.49998 2.03973 2.87308 1.66663 3.33331 1.66663H16.6666C17.1269 1.66663 17.5 2.03973 17.5 2.49996V16.6666ZM9.16665 6.66663H7.49998V8.33329H9.16665V9.99996H10.8333V8.33329H12.5V6.66663H10.8333V4.99996H9.16665V6.66663ZM11.6666 16.6666H13.3333V11.6666H6.66665V16.6666H8.33331V13.3333H11.6666V16.6666Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default HospitalFill;
