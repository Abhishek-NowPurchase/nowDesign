import React from 'react';

const FileWordFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.3333 1.66663L17.5 5.83329V17.5068C17.5 17.9633 17.1292 18.3333 16.6722 18.3333H3.32783C2.87063 18.3333 2.5 17.9539 2.5 17.5068V2.49313C2.5 2.03667 2.87079 1.66663 3.32783 1.66663H13.3333ZM11.6667 6.66663V10.8241L10 9.16662L8.34233 10.8333L8.33333 6.66663H6.66667V13.3333H8.33333L10 11.6666L11.6667 13.3333H13.3333V6.66663H11.6667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FileWordFill;
