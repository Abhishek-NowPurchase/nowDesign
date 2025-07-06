import React from 'react';

const HammerFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.1666 6.66663V1.66663H16.6666C17.1268 1.66663 17.4999 2.03973 17.4999 2.49996V5.83329C17.4999 6.29353 17.1268 6.66663 16.6666 6.66663H14.1666ZM12.4999 18.3333C12.4999 18.7935 12.1268 19.1666 11.6666 19.1666H8.33325C7.87302 19.1666 7.49992 18.7935 7.49992 18.3333V6.66663H2.08325V5.06193C2.08325 4.76554 2.24068 4.49146 2.49669 4.34212L7.08325 1.66663H12.4999V18.3333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default HammerFill;
