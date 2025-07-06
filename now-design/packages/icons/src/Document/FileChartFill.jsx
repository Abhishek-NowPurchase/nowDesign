import React from 'react';

const FileChartFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.3333 1.66663L17.5 5.83329V17.5068C17.5 17.9633 17.1292 18.3333 16.6722 18.3333H3.32783C2.87063 18.3333 2.5 17.9539 2.5 17.5068V2.49313C2.5 2.03667 2.87079 1.66663 3.32783 1.66663H13.3333ZM9.16667 5.83329V14.1666H10.8333V5.83329H9.16667ZM12.5 9.16662V14.1666H14.1667V9.16662H12.5ZM5.83333 10.8333V14.1666H7.5V10.8333H5.83333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FileChartFill;
