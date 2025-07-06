import React from 'react';

const BookletFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M6.6665 1.66663V18.3333H3.33317V15H1.6665V13.3333H3.33317V10.8333H1.6665V9.16662H3.33317V6.66663H1.6665V4.99996H3.33317V1.66663H6.6665ZM16.6706 1.66663C17.5888 1.66663 18.3332 2.41513 18.3332 3.32563V16.6743C18.3332 17.5905 17.5893 18.3333 16.6706 18.3333H8.33317V1.66663H16.6706Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default BookletFill;
