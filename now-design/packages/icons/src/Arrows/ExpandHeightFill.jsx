import React from 'react';

const ExpandHeightFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15 1.66663H5V3.33329H15V1.66663ZM14.1247 7.87475L10 3.74996L5.87728 7.87268L9.16667 7.87351V12.125L5.87565 12.125L10.0004 16.25L14.1252 12.1252L10.8333 12.1251V7.87392L14.1247 7.87475ZM15 16.6666V18.3333H5V16.6666H15Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ExpandHeightFill;
