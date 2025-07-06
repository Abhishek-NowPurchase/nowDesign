import React from 'react';

const ArchiveLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.49996 8.33333H1.66663V3.33578C1.66663 2.87419 2.04605 2.5 2.49313 2.5H17.5068C17.9633 2.5 18.3333 2.8649 18.3333 3.33578V8.33333H17.5V16.6679C17.5 17.1275 17.1292 17.5 16.6721 17.5H3.32779C2.87059 17.5 2.49996 17.1271 2.49996 16.6679V8.33333ZM15.8333 8.33333H4.16663V15.8333H15.8333V8.33333ZM3.33329 4.16667V6.66667H16.6666V4.16667H3.33329ZM7.49996 10H12.5V11.6667H7.49996V10Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArchiveLine;
