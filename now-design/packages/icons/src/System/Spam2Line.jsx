import React from 'react';

const Spam2Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.2798 2.08423L17.9173 6.7217V13.2801L13.2798 17.9176H6.72146L2.08398 13.2801V6.7217L6.72146 2.08423H13.2798ZM12.5895 3.7509H7.41181L3.75065 7.41205V12.5897L7.41181 16.2509H12.5895L16.2507 12.5897V7.41205L12.5895 3.7509ZM9.16667 12.5002H10.8333V14.1669H9.16667V12.5002ZM9.16667 5.83361H10.8333V10.8336H9.16667V5.83361Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Spam2Line;
