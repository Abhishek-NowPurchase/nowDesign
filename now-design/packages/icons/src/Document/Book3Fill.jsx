import React from 'react';

const Book3Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.5 3.33329H5.83333C4.91286 3.33329 4.16667 4.07948 4.16667 4.99996C4.16667 5.92043 4.91286 6.66663 5.83333 6.66663H17.5V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333H5.83333C3.99238 18.3333 2.5 16.8409 2.5 15V4.99996C2.5 3.15901 3.99238 1.66663 5.83333 1.66663H16.6667C17.1269 1.66663 17.5 2.03973 17.5 2.49996V3.33329ZM16.6667 5.83329H5.83333C5.3731 5.83329 5 5.46019 5 4.99996C5 4.53973 5.3731 4.16663 5.83333 4.16663H16.6667V5.83329Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Book3Fill;
