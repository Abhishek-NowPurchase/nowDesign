import React from 'react';

const ClipboardFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5 3.33329V6.66663H15V3.33329H16.6722C17.1293 3.33329 17.5 3.70408 17.5 4.16113V17.5055C17.5 17.9626 17.1292 18.3333 16.6722 18.3333H3.32783C2.87063 18.3333 2.5 17.9625 2.5 17.5055V4.16113C2.5 3.70393 2.87079 3.33329 3.32783 3.33329H5ZM6.66667 1.66663H13.3333V4.99996H6.66667V1.66663Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ClipboardFill;
