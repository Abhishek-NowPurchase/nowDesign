import React from 'react';

const ChatHistoryFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0001 1.66663C14.6024 1.66663 18.3334 5.39758 18.3334 9.99996C18.3334 14.6023 14.6024 18.3333 10.0001 18.3333C8.58175 18.3333 7.24612 17.979 6.07699 17.354L1.66675 18.3333L2.64699 13.9247C2.02143 12.7552 1.66675 11.419 1.66675 9.99996C1.66675 5.39758 5.39771 1.66663 10.0001 1.66663ZM10.8334 5.83329H9.16675V11.6666H14.1667V9.99996H10.8334V5.83329Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ChatHistoryFill;
