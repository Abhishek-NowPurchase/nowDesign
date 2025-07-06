import React from 'react';

const ExpandHeightLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5 1.66663H15V3.33329H5V1.66663ZM14.1247 7.87475L10 3.74996L5.87728 7.87268L7.05579 9.05121L9.16667 6.94032V13.0588L7.05416 10.9463L5.87565 12.1248L10 16.25L14.1247 12.1252L12.9462 10.9466L10.8333 13.0596V6.94032L12.9462 9.05329L14.1247 7.87475ZM15 16.6666V18.3333H5V16.6666H15Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ExpandHeightLine;
