import React from 'react';

const DownloadFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.5 15.8334H17.5V17.5H2.5V15.8334ZM10.8333 7.50004H16.6667L10 14.1667L3.33333 7.50004H9.16667V0.833374H10.8333V7.50004Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default DownloadFill;
