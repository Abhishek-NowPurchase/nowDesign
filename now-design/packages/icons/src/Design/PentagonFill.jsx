import React from 'react';

const PentagonFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0002 0.583496L18.956 7.09025L15.5352 17.6184H4.46523L1.04443 7.09025L10.0002 0.583496Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PentagonFill;
