import React from 'react';

const FileUserFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.3333 1.66663L17.5 5.83329V17.5068C17.5 17.9633 17.1292 18.3333 16.6722 18.3333H3.32783C2.87063 18.3333 2.5 17.9539 2.5 17.5068V2.49313C2.5 2.03667 2.87079 1.66663 3.32783 1.66663H13.3333ZM10 9.58329C11.1506 9.58329 12.0833 8.65054 12.0833 7.49996C12.0833 6.34937 11.1506 5.41663 10 5.41663C8.84942 5.41663 7.91667 6.34937 7.91667 7.49996C7.91667 8.65054 8.84942 9.58329 10 9.58329ZM6.27288 14.1666H13.7271C13.5198 12.2916 11.9303 10.8333 10 10.8333C8.06977 10.8333 6.48016 12.2916 6.27288 14.1666Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FileUserFill;
