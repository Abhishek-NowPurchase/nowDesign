import React from 'react';

const DownloadLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.5 15.8333H17.5V17.5H2.5V15.8333ZM10.8333 10.9763L15.8926 5.91704L17.0711 7.09556L10 14.1666L2.92893 7.09556L4.10744 5.91704L9.16667 10.9763V1.66663H10.8333V10.9763Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default DownloadLine;
