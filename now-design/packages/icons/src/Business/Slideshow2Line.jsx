import React from 'react';

const Slideshow2Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.8333 14.1666V16.6666H15V18.3333H4.99996V16.6666H9.16662V14.1666H3.33329C2.87306 14.1666 2.49996 13.7935 2.49996 13.3333V3.33329H1.66663V1.66663H18.3333V3.33329H17.5V13.3333C17.5 13.7935 17.1269 14.1666 16.6666 14.1666H10.8333ZM4.16663 12.5H15.8333V3.33329H4.16663V12.5ZM8.33329 4.99996L12.5 7.91663L8.33329 10.8333V4.99996Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Slideshow2Line;
