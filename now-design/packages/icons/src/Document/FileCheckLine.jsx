import React from 'react';

const FileCheckLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10 16.6666V18.3333H3.32783C2.87063 18.3333 2.5 17.9539 2.5 17.5068V2.49313C2.5 2.03667 2.87291 1.66663 3.33208 1.66663H13.3333L17.4998 5.83329V11.6666H15.8333V6.66663H12.5V3.33329H4.16667V16.6666H10ZM12.0538 16.2205L15.0001 19.1668L19.1248 15.042L17.9463 13.8635L15.0001 16.8098L13.2323 15.042L12.0538 16.2205Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FileCheckLine;
