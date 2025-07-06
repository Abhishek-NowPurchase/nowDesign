import React from 'react';

const AnthropicFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.9699 4.16663H11.2135L16.1494 16.6666H18.8418L13.9699 4.16663ZM6.02121 4.16663L1.14941 16.6666H3.90583L4.99557 14.0385H10.1238L11.1494 16.6025H13.9058L8.90585 4.16663H6.08531H6.02121ZM5.7648 11.7307L7.43146 7.30765L9.16227 11.7307H5.82891H5.7648Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default AnthropicFill;
