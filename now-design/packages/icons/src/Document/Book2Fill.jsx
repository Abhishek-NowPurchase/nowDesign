import React from 'react';

const Book2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.5 15H5C4.53977 15 4.16667 15.373 4.16667 15.8333C4.16667 16.2935 4.53977 16.6666 5 16.6666H17.5V18.3333H5C3.61929 18.3333 2.5 17.214 2.5 15.8333V3.33329C2.5 2.41282 3.24619 1.66663 4.16667 1.66663H17.5V15ZM13.3333 7.49996V5.83329H6.66667V7.49996H13.3333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Book2Fill;
