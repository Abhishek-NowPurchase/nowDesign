import React from 'react';

const FileUploadFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.3333 1.66663L17.5 5.83329V17.5068C17.5 17.9633 17.1292 18.3333 16.6722 18.3333H3.32783C2.87063 18.3333 2.5 17.9539 2.5 17.5068V2.49313C2.5 2.03667 2.87079 1.66663 3.32783 1.66663H13.3333ZM10.8333 9.99996H13.3333L10 6.66663L6.66667 9.99996H9.16667V13.3333H10.8333V9.99996Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FileUploadFill;
