import React from 'react';

const DragMove2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15 9.16662V6.66663L18.3333 9.99996L15 13.3333V10.8333H10.8333V15H13.3333L10 18.3333L6.66667 15H9.16667V10.8333H5V13.3333L1.66667 9.99996L5 6.66663V9.16662H9.16667V4.99996H6.66667L10 1.66663L13.3333 4.99996H10.8333V9.16662H15Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default DragMove2Fill;
