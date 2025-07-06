import React from 'react';

const MedicalRestTimeFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.16667 4.99996V11.6666H15.8333C15.8333 15.3485 12.8486 18.3333 9.16667 18.3333C5.48477 18.3333 2.5 15.3485 2.5 11.6666C2.5 8.0542 5.48333 4.99996 9.16667 4.99996ZM17.5 1.66663V3.33329L13.0605 8.33329H17.5V9.99996H10.8333V8.33329L15.2713 3.33329H10.8333V1.66663H17.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MedicalRestTimeFill;
