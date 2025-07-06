import React from 'react';

const ToggleFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M6.66732 4.16675H13.334C16.5557 4.16675 19.1673 6.77842 19.1673 10.0001C19.1673 13.2217 16.5557 15.8334 13.334 15.8334H6.66732C3.44566 15.8334 0.833984 13.2217 0.833984 10.0001C0.833984 6.77842 3.44566 4.16675 6.66732 4.16675ZM13.334 12.5001C14.7147 12.5001 15.834 11.3808 15.834 10.0001C15.834 8.61933 14.7147 7.50008 13.334 7.50008C11.9532 7.50008 10.834 8.61933 10.834 10.0001C10.834 11.3808 11.9532 12.5001 13.334 12.5001Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ToggleFill;
