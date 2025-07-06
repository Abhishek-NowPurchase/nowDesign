import React from 'react';

const FileUploadLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M12.5 3.33329H4.16667V16.6666H15.8333V6.66663H12.5V3.33329ZM2.5 2.49313C2.5 2.03667 2.87291 1.66663 3.33208 1.66663H13.3333L17.4998 5.83329L17.5 17.4937C17.5 17.9574 17.1292 18.3333 16.6722 18.3333H3.32783C2.87063 18.3333 2.5 17.9539 2.5 17.5068V2.49313ZM10.8333 9.99996V13.3333H9.16667V9.99996H6.66667L10 6.66663L13.3333 9.99996H10.8333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FileUploadLine;
