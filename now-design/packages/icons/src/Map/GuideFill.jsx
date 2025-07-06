import React from 'react';

const GuideFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.8337 6.66663V13.3333C10.8337 14.714 9.71441 15.8333 8.33366 15.8333H6.52473C6.18154 16.8043 5.25551 17.5 4.16699 17.5C2.78628 17.5 1.66699 16.3807 1.66699 15C1.66699 13.6192 2.78628 12.5 4.16699 12.5C5.25551 12.5 6.18154 13.1956 6.52473 14.1666H8.33366C8.79391 14.1666 9.16699 13.7935 9.16699 13.3333V6.66663C9.16699 5.28592 10.2862 4.16663 11.667 4.16663H14.167V1.66663L18.3337 4.99996L14.167 8.33329V5.83329H11.667C11.2067 5.83329 10.8337 6.20639 10.8337 6.66663Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default GuideFill;
