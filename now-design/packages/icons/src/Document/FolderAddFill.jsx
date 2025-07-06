import React from 'react';

const FolderAddFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.345 4.16667H17.4998C17.9601 4.16667 18.3332 4.53977 18.3332 5V16.6667C18.3332 17.1269 17.9601 17.5 17.4998 17.5H2.49984C2.0396 17.5 1.6665 17.1269 1.6665 16.6667V3.33333C1.6665 2.8731 2.0396 2.5 2.49984 2.5H8.67834L10.345 4.16667ZM9.1665 10H6.6665V11.6667H9.1665V14.1667H10.8332V11.6667H13.3332V10H10.8332V7.5H9.1665V10Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FolderAddFill;
