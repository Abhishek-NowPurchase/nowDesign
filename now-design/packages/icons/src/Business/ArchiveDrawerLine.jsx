import React from 'react';

const ArchiveDrawerLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.5 2.49313C2.5 2.03667 2.87079 1.66663 3.32783 1.66663H16.6722C17.1293 1.66663 17.5 2.04605 17.5 2.49313V17.5068C17.5 17.9633 17.1292 18.3333 16.6722 18.3333H3.32783C2.87063 18.3333 2.5 17.9539 2.5 17.5068V2.49313ZM15.8333 9.16662V3.33329H4.16667V9.16662H15.8333ZM15.8333 10.8333H4.16667V16.6666H15.8333V10.8333ZM7.5 4.99996H12.5V6.66663H7.5V4.99996ZM7.5 12.5H12.5V14.1666H7.5V12.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArchiveDrawerLine;
