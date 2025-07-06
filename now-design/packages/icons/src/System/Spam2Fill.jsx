import React from 'react';

const Spam2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.2798 2.08423L17.9173 6.7217V13.2801L13.2798 17.9176H6.72146L2.08398 13.2801V6.7217L6.72146 2.08423H13.2798ZM9.16667 12.5002V14.1669H10.8333V12.5002H9.16667ZM9.16667 5.83361V10.8336H10.8333V5.83361H9.16667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Spam2Fill;
