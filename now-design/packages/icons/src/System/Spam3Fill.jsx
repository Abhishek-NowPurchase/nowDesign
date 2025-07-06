import React from 'react';

const Spam3Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.2798 2.08423L17.9173 6.7217V13.2801L13.2798 17.9176H6.72146L2.08398 13.2801V6.7217L6.72146 2.08423H13.2798ZM6.6667 9.16691V10.8336H13.3333V9.16691H6.6667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Spam3Fill;
