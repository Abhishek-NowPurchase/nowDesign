import React from 'react';

const BatteryChargeLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M6.6665 15.8333H2.49984C2.0396 15.8333 1.6665 15.4602 1.6665 15V4.99996C1.6665 4.53973 2.0396 4.16663 2.49984 4.16663H8.02067L7.04845 5.83329H3.33317V14.1666H6.6665V15.8333ZM10.3123 15.8333L11.2846 14.1666H14.9998V5.83329H11.6665V4.16663H15.8332C16.2934 4.16663 16.6665 4.53973 16.6665 4.99996V15C16.6665 15.4602 16.2934 15.8333 15.8332 15.8333H10.3123ZM17.4998 7.49996H19.1665V12.5H17.4998V7.49996ZM9.99984 9.16663H12.4998L8.33317 15.8333V10.8333H5.83317L9.99984 4.16663V9.16663Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default BatteryChargeLine;
