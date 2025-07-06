import React from 'react';

const PlayFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.147 10.3468L7.31478 16.2349C7.12332 16.3625 6.86462 16.3108 6.73697 16.1194C6.69134 16.0509 6.66699 15.9705 6.66699 15.8882V4.11198C6.66699 3.88185 6.85354 3.69531 7.08366 3.69531C7.16592 3.69531 7.24634 3.71966 7.31478 3.76529L16.147 9.65337C16.3384 9.78104 16.3902 10.0398 16.2625 10.2312C16.232 10.277 16.1927 10.3163 16.147 10.3468Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PlayFill;
