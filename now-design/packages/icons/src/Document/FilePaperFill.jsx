import React from 'react';

const FilePaperFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.50016 12.5V2.49996C2.50016 2.03973 2.87326 1.66663 3.3335 1.66663H16.6668C17.1271 1.66663 17.5002 2.03973 17.5002 2.49996V15.8333C17.5002 17.214 16.3809 18.3333 15.0002 18.3333H3.3335C1.95279 18.3333 0.833496 17.214 0.833496 15.8333V14.1666H14.1668V15.8333C14.1668 16.2935 14.5399 16.6666 15.0002 16.6666C15.4604 16.6666 15.8335 16.2935 15.8335 15.8333V12.5H2.50016Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FilePaperFill;
