import React from 'react';

const FileMarkedLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.6667 18.3333H3.33333C2.8731 18.3333 2.5 17.9602 2.5 17.5V2.49996C2.5 2.03973 2.8731 1.66663 3.33333 1.66663H16.6667C17.1269 1.66663 17.5 2.03973 17.5 2.49996V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333ZM5.83333 3.33329H4.16667V16.6666H15.8333V3.33329H11.6667V10.8333L8.75 9.16662L5.83333 10.8333V3.33329Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FileMarkedLine;
