import React from 'react';

const FileZipFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M8.33333 1.66663V3.33329H10V1.66663H16.6722C17.1292 1.66663 17.5 2.03667 17.5 2.49313V17.5068C17.5 17.9539 17.1293 18.3333 16.6722 18.3333H3.32783C2.87079 18.3333 2.5 17.9633 2.5 17.5068V2.49313C2.5 2.04605 2.87063 1.66663 3.32783 1.66663H8.33333ZM10 3.33329V4.99996H11.6667V3.33329H10ZM8.33333 4.99996V6.66663H10V4.99996H8.33333ZM10 6.66663V8.33329H11.6667V6.66663H10ZM8.33333 8.33329V9.99996H10V8.33329H8.33333ZM10 9.99996V11.6666H8.33333V14.1666H11.6667V9.99996H10Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FileZipFill;
