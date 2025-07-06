import React from 'react';

const FileListFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.6667 18.3333H3.33333C2.8731 18.3333 2.5 17.9602 2.5 17.5V2.49996C2.5 2.03973 2.8731 1.66663 3.33333 1.66663H16.6667C17.1269 1.66663 17.5 2.03973 17.5 2.49996V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333ZM6.66667 5.83329V7.49996H13.3333V5.83329H6.66667ZM6.66667 9.16662V10.8333H13.3333V9.16662H6.66667ZM6.66667 12.5V14.1666H13.3333V12.5H6.66667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FileListFill;
