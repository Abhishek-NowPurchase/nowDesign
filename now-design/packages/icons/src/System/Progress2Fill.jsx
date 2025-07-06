import React from 'react';

const Progress2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0003 18.3333C14.6027 18.3333 18.3337 14.6023 18.3337 9.99996C18.3337 5.39758 14.6027 1.66663 10.0003 1.66663C5.39795 1.66663 1.66699 5.39758 1.66699 9.99996C1.66699 14.6023 5.39795 18.3333 10.0003 18.3333ZM10.0003 9.99996V4.99996C12.7617 4.99996 15.0003 7.23853 15.0003 9.99996H10.0003Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Progress2Fill;
