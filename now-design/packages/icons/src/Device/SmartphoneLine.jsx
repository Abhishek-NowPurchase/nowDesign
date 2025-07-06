import React from 'react';

const SmartphoneLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5.83317 3.33329V16.6666H14.1665V3.33329H5.83317ZM4.99984 1.66663H14.9998C15.4601 1.66663 15.8332 2.03973 15.8332 2.49996V17.5C15.8332 17.9602 15.4601 18.3333 14.9998 18.3333H4.99984C4.5396 18.3333 4.1665 17.9602 4.1665 17.5V2.49996C4.1665 2.03973 4.5396 1.66663 4.99984 1.66663ZM9.99984 14.1666C10.4601 14.1666 10.8332 14.5397 10.8332 15C10.8332 15.4602 10.4601 15.8333 9.99984 15.8333C9.53959 15.8333 9.1665 15.4602 9.1665 15C9.1665 14.5397 9.53959 14.1666 9.99984 14.1666Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SmartphoneLine;
