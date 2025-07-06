import React from 'react';

const Medal2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0001 7.08329L11.7634 11.3229L16.3404 11.6899L12.8533 14.677L13.9186 19.1434L10.0001 16.75L6.08148 19.1434L7.14688 14.677L3.65967 11.6899L8.23669 11.3229L10.0001 7.08329ZM6.66671 1.66663V9.16663H5.00004V1.66663H6.66671ZM15.0001 1.66663V9.16663H13.3334V1.66663H15.0001ZM10.8334 1.66663V5.83329H9.16675V1.66663H10.8334Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Medal2Fill;
