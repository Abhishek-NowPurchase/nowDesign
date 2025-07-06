import React from 'react';

const MapPinAddFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15.3033 14.47L10 19.7732L4.6967 14.47C1.76777 11.541 1.76777 6.79226 4.6967 3.86333C7.62563 0.934393 12.3743 0.934393 15.3033 3.86333C18.2322 6.79226 18.2322 11.541 15.3033 14.47ZM9.16667 8.33329H6.66667V9.99996H9.16667V12.5H10.8333V9.99996H13.3333V8.33329H10.8333V5.83329H9.16667V8.33329Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MapPinAddFill;
