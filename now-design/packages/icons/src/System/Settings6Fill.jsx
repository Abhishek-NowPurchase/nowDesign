import React from 'react';

const Settings6Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.584 2.0614L19.1673 9.99996L14.584 17.9385H5.41732L0.833984 9.99996L5.41732 2.0614H14.584ZM7.19563 6.8082L11.3623 14.025L12.8057 13.1917L8.63899 5.97487L7.19563 6.8082Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Settings6Fill;
