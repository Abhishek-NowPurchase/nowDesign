import React from 'react';

const HospitalLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M6.66665 16.6666V11.6666H13.3333V16.6666H15.8333V3.33329H4.16665V16.6666H6.66665ZM8.33331 16.6666H11.6666V13.3333H8.33331V16.6666ZM17.5 16.6666H19.1666V18.3333H0.833313V16.6666H2.49998V2.49996C2.49998 2.03973 2.87308 1.66663 3.33331 1.66663H16.6666C17.1269 1.66663 17.5 2.03973 17.5 2.49996V16.6666ZM9.16665 6.66663V4.99996H10.8333V6.66663H12.5V8.33329H10.8333V9.99996H9.16665V8.33329H7.49998V6.66663H9.16665Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default HospitalLine;
