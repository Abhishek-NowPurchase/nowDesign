import React from 'react';

const FileTextLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.5 6.66663V17.4943C17.5 17.9584 17.1293 18.3333 16.6722 18.3333H3.32783C2.87079 18.3333 2.5 17.9633 2.5 17.5068V2.49313C2.5 2.04605 2.87392 1.66663 3.33518 1.66663H12.4973L17.5 6.66663ZM15.8333 7.49996H11.6667V3.33329H4.16667V16.6666H15.8333V7.49996ZM6.66667 5.83329H9.16667V7.49996H6.66667V5.83329ZM6.66667 9.16662H13.3333V10.8333H6.66667V9.16662ZM6.66667 12.5H13.3333V14.1666H6.66667V12.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FileTextLine;
