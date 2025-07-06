import React from 'react';

const AnthropicLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M11.7679 4.16663H13.5562L18.4173 16.6666H16.6291L11.7679 4.16663ZM6.3829 4.16663H8.61726L13.4249 16.6666H11.6393L10.3572 13.3333H4.64295L3.36089 16.6666H1.5752L6.3829 4.16663ZM9.71618 11.6666L7.50007 5.90477L5.28397 11.6666H9.71618Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default AnthropicLine;
