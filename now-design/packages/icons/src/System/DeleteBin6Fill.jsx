import React from 'react';

const DeleteBin6Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.166 3.33329H18.3327V4.99996H16.666V17.5C16.666 17.9602 16.2929 18.3333 15.8327 18.3333H4.16602C3.70578 18.3333 3.33268 17.9602 3.33268 17.5V4.99996H1.66602V3.33329H5.83268V1.66663H14.166V3.33329ZM7.49935 7.49996V14.1666H9.16601V7.49996H7.49935ZM10.8327 7.49996V14.1666H12.4993V7.49996H10.8327Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default DeleteBin6Fill;
