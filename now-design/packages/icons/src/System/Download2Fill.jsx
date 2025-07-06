import React from 'react';

const Download2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33366 15.8333H16.667V10H18.3337V16.6667C18.3337 17.1269 17.9606 17.5 17.5003 17.5H2.50033C2.04009 17.5 1.66699 17.1269 1.66699 16.6667V10H3.33366V15.8333ZM11.667 7.5H15.8337L10.0003 13.3333L4.16699 7.5H8.33366V2.5H11.667V7.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Download2Fill;
