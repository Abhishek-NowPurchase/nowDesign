import React from 'react';

const FileChart2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.3333 1.66663L17.5 5.83329V17.5068C17.5 17.9633 17.1292 18.3333 16.6722 18.3333H3.32783C2.87063 18.3333 2.5 17.9539 2.5 17.5068V2.49313C2.5 2.03667 2.87079 1.66663 3.32783 1.66663H13.3333ZM10 6.66663C8.15905 6.66663 6.66667 8.15901 6.66667 9.99996C6.66667 11.8409 8.15905 13.3333 10 13.3333C11.8409 13.3333 13.3333 11.8409 13.3333 9.99996H10V6.66663Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FileChart2Fill;
