import React from 'react';

const NextjsFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0003 18.3333C5.39795 18.3333 1.66699 14.6023 1.66699 9.99996C1.66699 5.39758 5.39795 1.66663 10.0003 1.66663C14.6027 1.66663 18.3337 5.39758 18.3337 9.99996C18.3337 14.6023 14.6027 18.3333 10.0003 18.3333ZM13.3336 6.66663H12.2086V9.99996H13.3336V6.66663ZM7.78873 8.0911L12.8378 14.6149L13.7162 13.941L8.06933 6.66663H6.66699V13.3307H7.78873V8.0911Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default NextjsFill;
