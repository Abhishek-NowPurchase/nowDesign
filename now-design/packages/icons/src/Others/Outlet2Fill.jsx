import React from 'react';

const Outlet2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0003 18.3333C5.39795 18.3333 1.66699 14.6023 1.66699 9.99996C1.66699 5.39758 5.39795 1.66663 10.0003 1.66663C14.6027 1.66663 18.3337 5.39758 18.3337 9.99996C18.3337 14.6023 14.6027 18.3333 10.0003 18.3333ZM9.16699 5.83329V9.16662H10.8337V5.83329H9.16699ZM11.667 9.99996V13.3333H13.3337V9.99996H11.667ZM6.66699 9.99996V13.3333H8.33366V9.99996H6.66699Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Outlet2Fill;
