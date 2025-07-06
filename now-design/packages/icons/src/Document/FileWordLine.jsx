import React from 'react';

const FileWordLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.3333 6.66663V13.3333H11.6667L10 11.6666L8.33333 13.3333H6.66667V6.66663H8.33333V10.8333L10 9.16662L11.6667 10.8333V6.66663H12.5V3.33329H4.16667V16.6666H15.8333V6.66663H13.3333ZM2.5 2.49313C2.5 2.03667 2.87291 1.66663 3.33208 1.66663H13.3333L17.4998 5.83329L17.5 17.4937C17.5 17.9574 17.1292 18.3333 16.6722 18.3333H3.32783C2.87063 18.3333 2.5 17.9539 2.5 17.5068V2.49313Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FileWordLine;
