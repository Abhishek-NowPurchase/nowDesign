import React from 'react';

const MedicalHeart3Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.7503 2.5C16.2817 2.5 18.3337 4.58333 18.3337 7.5C18.3337 13.3333 12.0837 16.6667 10.0003 17.9167C7.91699 16.6667 1.66699 13.3333 1.66699 7.5C1.66699 4.58333 3.75033 2.5 6.25032 2.5C7.8003 2.5 9.16699 3.33333 10.0003 4.16667C10.8337 3.33333 12.2003 2.5 13.7503 2.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MedicalHeart3Fill;
