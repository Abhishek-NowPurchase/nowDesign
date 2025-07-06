import React from 'react';

const Compass2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15.2734 3.54837L8.82182 9.99996L10.0003 11.1785L16.4519 4.72688C17.6278 6.16363 18.3337 7.99988 18.3337 9.99996C18.3337 14.6 14.6003 18.3333 10.0003 18.3333C5.40032 18.3333 1.66699 14.6 1.66699 9.99996C1.66699 5.39996 5.40032 1.66663 10.0003 1.66663C12.0004 1.66663 13.8367 2.37242 15.2734 3.54837Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Compass2Fill;
