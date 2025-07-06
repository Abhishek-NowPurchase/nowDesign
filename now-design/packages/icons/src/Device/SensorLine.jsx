import React from 'react';

const SensorLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.99984 6.66663V15.8333H14.9998V6.66663H12.4998V1.66663H14.1665V4.99996H18.3332V6.66663H16.6665V16.6666C16.6665 17.1269 16.2934 17.5 15.8332 17.5H4.1665C3.70627 17.5 3.33317 17.1269 3.33317 16.6666V6.66663H1.6665V4.99996H5.83317V1.66663H7.49984V6.66663H4.99984ZM10.8332 1.66663V6.66663H9.1665V1.66663H10.8332Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SensorLine;
