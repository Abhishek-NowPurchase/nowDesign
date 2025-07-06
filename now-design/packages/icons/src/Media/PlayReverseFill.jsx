import React from 'react';

const PlayReverseFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.85355 10.3468L12.6857 16.2349C12.8772 16.3625 13.1359 16.3108 13.2636 16.1194C13.3092 16.0509 13.3335 15.9705 13.3335 15.8882V4.11198C13.3335 3.88185 13.147 3.69531 12.9168 3.69531C12.8346 3.69531 12.7542 3.71966 12.6857 3.76529L3.85355 9.65337C3.66209 9.78104 3.61034 10.0398 3.73799 10.2312C3.7685 10.277 3.80778 10.3163 3.85355 10.3468Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PlayReverseFill;
