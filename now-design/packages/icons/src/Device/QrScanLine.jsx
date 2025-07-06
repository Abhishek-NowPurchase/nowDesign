import React from 'react';

const QrScanLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.5 13.3333V17.5H2.5V13.3333H4.16667V15.8333H15.8333V13.3333H17.5ZM2.5 9.16667H17.5V10.8333H2.5V9.16667ZM17.5 6.66667H15.8333V4.16667H4.16667V6.66667H2.5V2.5H17.5V6.66667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default QrScanLine;
