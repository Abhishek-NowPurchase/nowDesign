import React from 'react';

const PrinterFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5.83329 14.1666H14.1666V18.3333H5.83329V14.1666ZM15.8333 16.6666V12.5H4.16663V16.6666H2.49996C2.03973 16.6666 1.66663 16.2935 1.66663 15.8333V7.49996C1.66663 7.03973 2.03973 6.66663 2.49996 6.66663H17.5C17.9602 6.66663 18.3333 7.03973 18.3333 7.49996V15.8333C18.3333 16.2935 17.9602 16.6666 17.5 16.6666H15.8333ZM4.16663 8.33329V9.99996H6.66663V8.33329H4.16663ZM5.83329 1.66663H14.1666C14.6269 1.66663 15 2.03973 15 2.49996V4.99996H4.99996V2.49996C4.99996 2.03973 5.37306 1.66663 5.83329 1.66663Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PrinterFill;
