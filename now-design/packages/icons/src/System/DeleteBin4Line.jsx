import React from 'react';

const DeleteBin4Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.667 5.83329V17.5C16.667 17.9602 16.2939 18.3333 15.8337 18.3333H4.16699C3.70676 18.3333 3.33366 17.9602 3.33366 17.5V5.83329H1.66699V4.16663H18.3337V5.83329H16.667ZM5.00032 5.83329V16.6666H15.0003V5.83329H5.00032ZM5.83366 1.66663H14.167V3.33329H5.83366V1.66663ZM9.16699 8.33329H10.8337V14.1666H9.16699V8.33329Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default DeleteBin4Line;
