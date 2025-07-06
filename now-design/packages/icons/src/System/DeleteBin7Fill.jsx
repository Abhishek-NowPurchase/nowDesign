import React from 'react';

const DeleteBin7Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5.83268 4.99996V2.49996C5.83268 2.03973 6.20578 1.66663 6.66601 1.66663H13.3327C13.7929 1.66663 14.166 2.03973 14.166 2.49996V4.99996H18.3327V6.66663H16.666V17.5C16.666 17.9602 16.2929 18.3333 15.8327 18.3333H4.16602C3.70578 18.3333 3.33268 17.9602 3.33268 17.5V6.66663H1.66602V4.99996H5.83268ZM7.49935 3.33329V4.99996H12.4993V3.33329H7.49935Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default DeleteBin7Fill;
