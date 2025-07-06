import React from 'react';

const NetflixLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.3212 14.3399L13.3343 1.66663H15.001V18.3333C14.4342 18.111 13.8732 17.9722 13.3176 17.9166L6.66764 5.25176V17.9166C6.11209 17.9722 5.55653 18.111 5.00098 18.3333V1.66663H6.66764L13.3212 14.3399Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default NetflixLine;
