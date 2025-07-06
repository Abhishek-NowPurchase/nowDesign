import React from 'react';

const OpenbaseFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0002 2.30005L18.3328 4.99671L17.5836 12.8867L10.0002 18.603L2.41693 12.8834L1.67578 5.00005L10.0002 2.30005ZM10.0002 2.98783L2.65765 5.36255L10.0002 17.3277L17.3383 5.36255L10.0002 2.98783Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default OpenbaseFill;
