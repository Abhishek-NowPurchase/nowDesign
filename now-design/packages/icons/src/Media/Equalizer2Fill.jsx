import React from 'react';

const Equalizer2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.5 5.83329C2.5 4.22246 3.80583 2.91663 5.41667 2.91663C7.0275 2.91663 8.33333 4.22246 8.33333 5.83329C8.33333 7.44413 7.0275 8.74996 5.41667 8.74996C3.80583 8.74996 2.5 7.44413 2.5 5.83329ZM16.6667 6.66663H10V4.99996H16.6667V6.66663ZM11.6667 14.1666C11.6667 12.5558 12.9725 11.25 14.5833 11.25C16.1942 11.25 17.5 12.5558 17.5 14.1666C17.5 15.7775 16.1942 17.0833 14.5833 17.0833C12.9725 17.0833 11.6667 15.7775 11.6667 14.1666ZM10 13.3333V15H3.33333V13.3333H10Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Equalizer2Fill;
