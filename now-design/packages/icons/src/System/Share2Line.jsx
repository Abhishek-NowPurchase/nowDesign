import React from 'react';

const Share2Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10 2.15479L15.1726 7.32737L13.9941 8.50585L10.8333 5.34513V13.3333H9.16667V5.34513L6.00592 8.50585L4.82741 7.32737L10 2.15479ZM2.5 14.9999V11.6666H4.16667V14.9999C4.16667 15.4602 4.53977 15.8333 5 15.8333H15C15.4602 15.8333 15.8333 15.4602 15.8333 14.9999V11.6666H17.5V14.9999C17.5 16.3807 16.3807 17.4999 15 17.4999H5C3.61929 17.4999 2.5 16.3807 2.5 14.9999Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Share2Line;
