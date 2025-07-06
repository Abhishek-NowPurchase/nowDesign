import React from 'react';

const BatteryChargeFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.99984 9.16663V4.16663L5.83317 10.8333H8.33317V15.8333L12.4998 9.16663H9.99984ZM2.49984 4.16663H15.8332C16.2934 4.16663 16.6665 4.53973 16.6665 4.99996V15C16.6665 15.4602 16.2934 15.8333 15.8332 15.8333H2.49984C2.0396 15.8333 1.6665 15.4602 1.6665 15V4.99996C1.6665 4.53973 2.0396 4.16663 2.49984 4.16663ZM17.4998 7.49996H19.1665V12.5H17.4998V7.49996Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default BatteryChargeFill;
