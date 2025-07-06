import React from 'react';

const DeleteBin5Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33366 6.66663H16.667V17.5C16.667 17.9602 16.2939 18.3333 15.8337 18.3333H4.16699C3.70676 18.3333 3.33366 17.9602 3.33366 17.5V6.66663ZM5.83366 4.16663V2.49996C5.83366 2.03973 6.20676 1.66663 6.66699 1.66663H13.3337C13.7939 1.66663 14.167 2.03973 14.167 2.49996V4.16663H18.3337V5.83329H1.66699V4.16663H5.83366ZM7.50032 3.33329V4.16663H12.5003V3.33329H7.50032ZM7.50032 9.99996V15H9.16699V9.99996H7.50032ZM10.8337 9.99996V15H12.5003V9.99996H10.8337Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default DeleteBin5Fill;
