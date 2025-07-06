import React from 'react';

const ChatSmile3Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0001 1.66663C14.6024 1.66663 18.3334 5.39758 18.3334 9.99996C18.3334 14.6023 14.6024 18.3333 10.0001 18.3333H1.66675L4.10752 15.8925C2.59949 14.3845 1.66675 12.3011 1.66675 9.99996C1.66675 5.39758 5.39771 1.66663 10.0001 1.66663ZM13.3334 10.8333H6.66675C6.66675 12.6742 8.15913 14.1666 10.0001 14.1666C11.841 14.1666 13.3334 12.6742 13.3334 10.8333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ChatSmile3Fill;
