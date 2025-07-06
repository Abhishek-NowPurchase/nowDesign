import React from 'react';

const DeleteBin6Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5.83268 3.33329V1.66663H14.166V3.33329H18.3327V4.99996H16.666V17.5C16.666 17.9602 16.2929 18.3333 15.8327 18.3333H4.16602C3.70578 18.3333 3.33268 17.9602 3.33268 17.5V4.99996H1.66602V3.33329H5.83268ZM4.99935 4.99996V16.6666H14.9993V4.99996H4.99935ZM7.49935 7.49996H9.16601V14.1666H7.49935V7.49996ZM10.8327 7.49996H12.4993V14.1666H10.8327V7.49996Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default DeleteBin6Line;
