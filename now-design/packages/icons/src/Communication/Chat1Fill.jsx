import React from 'react';

const Chat1Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M8.33341 2.5H11.6667C15.3487 2.5 18.3334 5.48477 18.3334 9.16667C18.3334 12.8486 15.3487 15.8333 11.6667 15.8333V18.75C7.50008 17.0833 1.66675 14.5833 1.66675 9.16667C1.66675 5.48477 4.65151 2.5 8.33341 2.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Chat1Fill;
