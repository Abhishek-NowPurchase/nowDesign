import React from 'react';

const Chat3Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M6.07606 17.3535L1.66675 18.3333L2.64659 13.924C2.02128 12.7546 1.66675 11.4187 1.66675 9.99996C1.66675 5.39758 5.39771 1.66663 10.0001 1.66663C14.6024 1.66663 18.3334 5.39758 18.3334 9.99996C18.3334 14.6023 14.6024 18.3333 10.0001 18.3333C8.58133 18.3333 7.24541 17.9788 6.07606 17.3535Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Chat3Fill;
