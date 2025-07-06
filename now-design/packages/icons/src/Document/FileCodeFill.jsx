import React from 'react';

const FileCodeFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.3333 1.66663L17.5 5.83329V17.5068C17.5 17.9633 17.1292 18.3333 16.6722 18.3333H3.32783C2.87063 18.3333 2.5 17.9539 2.5 17.5068V2.49313C2.5 2.03667 2.87079 1.66663 3.32783 1.66663H13.3333ZM14.7141 9.99996L11.7677 7.05368L10.5892 8.23219L12.357 9.99996L10.5892 11.7677L11.7677 12.9462L14.7141 9.99996ZM5.28596 9.99996L8.23223 12.9462L9.41075 11.7677L7.64297 9.99996L9.41075 8.23219L8.23223 7.05368L5.28596 9.99996Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FileCodeFill;
