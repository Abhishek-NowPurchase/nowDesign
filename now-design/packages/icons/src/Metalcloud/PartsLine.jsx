import React from 'react';

const PartsLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.584 2.0614L19.1673 9.99996L14.584 17.9385H5.41732L0.833984 9.99996L5.41732 2.0614H14.584ZM13.6217 3.72807H6.37957L2.75849 9.99996L6.37957 16.2719H13.6217L17.2428 9.99996L13.6217 3.72807ZM7.19564 6.8082L8.63899 5.97487L12.8057 13.1917L11.3623 14.025L7.19564 6.8082Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PartsLine;
