import React from 'react';

const FileCheckFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.4998 5.83329L13.3333 1.66663H3.33208C2.87291 1.66663 2.5 2.03667 2.5 2.49313V17.5068C2.5 17.9539 2.87063 18.3333 3.32783 18.3333H10.2845C10.1003 17.812 10 17.251 10 16.6666C10 13.9052 12.2386 11.6666 15 11.6666C15.9107 11.6666 16.7645 11.9101 17.4999 12.3355L17.4998 5.83329ZM12.0538 16.2205L15.0001 19.1668L19.1248 15.042L17.9463 13.8635L15.0001 16.8098L13.2323 15.042L12.0538 16.2205Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FileCheckFill;
