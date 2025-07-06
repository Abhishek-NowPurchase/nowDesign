import React from 'react';

const FileMarkedFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.5 2.49313V17.5068C17.5 17.9539 17.1293 18.3333 16.6722 18.3333H3.32783C2.87079 18.3333 2.5 17.9633 2.5 17.5068V2.49313C2.5 2.04605 2.87063 1.66663 3.32783 1.66663H16.6722C17.1292 1.66663 17.5 2.03667 17.5 2.49313ZM5.83333 3.33329V10.8333L8.75 9.16662L11.6667 10.8333V3.33329H5.83333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FileMarkedFill;
