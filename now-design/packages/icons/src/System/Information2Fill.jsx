import React from 'react';

const Information2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0003 18.3333C5.39795 18.3333 1.66699 14.6023 1.66699 9.99996C1.66699 5.39758 5.39795 1.66663 10.0003 1.66663C14.6027 1.66663 18.3337 5.39758 18.3337 9.99996C18.3337 14.6023 14.6027 18.3333 10.0003 18.3333ZM10.0003 7.91663C10.6907 7.91663 11.2503 7.35698 11.2503 6.66663C11.2503 5.97627 10.6907 5.41663 10.0003 5.41663C9.30999 5.41663 8.75032 5.97627 8.75032 6.66663C8.75032 7.35698 9.30999 7.91663 10.0003 7.91663ZM11.667 12.5H10.8337V8.74996H8.33366V10.4166H9.16699V12.5H8.33366V14.1666H11.667V12.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Information2Fill;
