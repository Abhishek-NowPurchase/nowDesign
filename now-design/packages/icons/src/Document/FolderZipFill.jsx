import React from 'react';

const FolderZipFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.4998 4.16667C17.9601 4.16667 18.3332 4.53977 18.3332 5V16.6667C18.3332 17.1269 17.9601 17.5 17.4998 17.5H2.49984C2.0396 17.5 1.6665 17.1269 1.6665 16.6667V3.33333C1.6665 2.8731 2.0396 2.5 2.49984 2.5H8.67834L10.345 4.16667H13.3332V5.83333H14.9998V4.16667H17.4998ZM14.9998 10.8333H13.3332V12.5H11.6665V15H14.9998V10.8333ZM13.3332 9.16667H11.6665V10.8333H13.3332V9.16667ZM14.9998 7.5H13.3332V9.16667H14.9998V7.5ZM13.3332 5.83333H11.6665V7.5H13.3332V5.83333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FolderZipFill;
