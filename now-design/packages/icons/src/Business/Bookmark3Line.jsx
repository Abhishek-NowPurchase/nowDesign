import React from 'react';

const Bookmark3Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33333 1.66663H16.6667C17.1269 1.66663 17.5 2.03973 17.5 2.49996V18.5635C17.5 18.7937 17.3134 18.9803 17.0833 18.9803C17.0248 18.9803 16.967 18.9679 16.9136 18.944L10 15.8594L3.08644 18.944C2.87629 19.0379 2.62993 18.9435 2.53616 18.7334C2.51232 18.6799 2.5 18.622 2.5 18.5635V2.49996C2.5 2.03973 2.8731 1.66663 3.33333 1.66663ZM15.8333 16.637V3.33329H4.16667V16.637L10 14.0343L15.8333 16.637ZM10 11.25L7.55089 12.5375L8.01863 9.81038L6.03727 7.87906L8.77542 7.48118L10 4.99996L11.2246 7.48118L13.9628 7.87906L11.9813 9.81038L12.4491 12.5375L10 11.25Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Bookmark3Line;
