import React from 'react';

const Shining2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.99935 0.416626L13.3327 6.66663L19.5827 9.99996L13.3327 13.3333L9.99935 19.5833L6.66601 13.3333L0.416016 9.99996L6.66601 6.66663L9.99935 0.416626Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Shining2Fill;
