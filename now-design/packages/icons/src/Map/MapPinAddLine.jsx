import React from 'react';

const MapPinAddLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10 17.4162L14.1247 13.2914C16.4028 11.0134 16.4028 7.31989 14.1247 5.04183C11.8467 2.76378 8.15327 2.76378 5.87521 5.04183C3.59715 7.31989 3.59715 11.0134 5.87521 13.2914L10 17.4162ZM10 19.7732L4.6967 14.47C1.76777 11.541 1.76777 6.79226 4.6967 3.86333C7.62563 0.934393 12.3743 0.934393 15.3033 3.86333C18.2322 6.79226 18.2322 11.541 15.3033 14.47L10 19.7732ZM9.16667 8.33329V5.83329H10.8333V8.33329H13.3333V9.99996H10.8333V12.5H9.16667V9.99996H6.66667V8.33329H9.16667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MapPinAddLine;
