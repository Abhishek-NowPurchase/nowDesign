import React from 'react';

const EthFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0001 0L3.8584 10.1834L10.0001 13.8119L16.1417 10.1834L10.0001 0ZM10.0001 20L3.8584 11.3477L10.0001 15L16.1417 11.3477L10.0001 20Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default EthFill;
