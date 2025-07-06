import React from 'react';

const MapPinTimeFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.8333 9.16663V4.99996H9.16667V10.8333H14.1667V9.16663H10.8333ZM15.3033 14.47L10 19.7732L4.6967 14.47C1.76777 11.541 1.76777 6.79226 4.6967 3.86333C7.62563 0.934393 12.3743 0.934393 15.3033 3.86333C18.2322 6.79226 18.2322 11.541 15.3033 14.47Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MapPinTimeFill;
