import React from 'react';

const UmbrellaFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.8317 1.70786C15.0428 2.12596 18.3317 5.67892 18.3317 10V10.8334H10.8317V15.8334C10.8317 16.7539 11.5779 17.5 12.4983 17.5C13.4188 17.5 14.165 16.7539 14.165 15.8334V15H15.8317V15.8334C15.8317 17.6743 14.3393 19.1667 12.4983 19.1667C10.6574 19.1667 9.165 17.6743 9.165 15.8334V10.8334H1.66504V10C1.66504 5.67892 4.95393 2.12596 9.165 1.70786V1.66671C9.165 1.20647 9.53816 0.833374 9.99833 0.833374C10.4586 0.833374 10.8317 1.20647 10.8317 1.66671V1.70786Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default UmbrellaFill;
