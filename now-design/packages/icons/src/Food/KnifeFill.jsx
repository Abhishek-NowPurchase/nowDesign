import React from 'react';

const KnifeFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M18.6457 16.1995C19.1338 16.6876 19.1338 17.4791 18.6457 17.9672C18.1575 18.4554 17.366 18.4554 16.8778 17.9672L13.0477 14.1371L10.1014 17.0834L3.61962 10.6015C1.06524 8.04718 1.01704 3.93567 3.47503 1.32254L3.61962 1.17346L18.6457 16.1995Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default KnifeFill;
