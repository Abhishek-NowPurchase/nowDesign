import React from 'react';

const Dice1Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.16667 2.5C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5H4.16667ZM10 11.6667C9.0795 11.6667 8.33333 10.9205 8.33333 10C8.33333 9.0795 9.0795 8.33333 10 8.33333C10.9205 8.33333 11.6667 9.0795 11.6667 10C11.6667 10.9205 10.9205 11.6667 10 11.6667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Dice1Fill;
