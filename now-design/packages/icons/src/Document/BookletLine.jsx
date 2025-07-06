import React from 'react';

const BookletLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.6706 1.66663C17.5888 1.66663 18.3332 2.41513 18.3332 3.32563V16.6743C18.3332 17.5905 17.5893 18.3333 16.6706 18.3333H3.33317V15H1.6665V13.3333H3.33317V10.8333H1.6665V9.16662H3.33317V6.66663H1.6665V4.99996H3.33317V1.66663H16.6706ZM6.6665 3.33329H4.99984V16.6666H6.6665V3.33329ZM16.6665 3.33329H8.33317V16.6666H16.6665V3.33329Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default BookletLine;
