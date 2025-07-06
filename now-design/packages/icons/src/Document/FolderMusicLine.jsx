import React from 'react';

const FolderMusicLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.345 4.16667H17.4998C17.9601 4.16667 18.3332 4.53977 18.3332 5V16.6667C18.3332 17.1269 17.9601 17.5 17.4998 17.5H2.49984C2.0396 17.5 1.6665 17.1269 1.6665 16.6667V3.33333C1.6665 2.8731 2.0396 2.5 2.49984 2.5H8.67834L10.345 4.16667ZM3.33317 4.16667V15.8333H16.6665V5.83333H9.65467L7.98799 4.16667H3.33317ZM9.1665 10.875V7.5H13.3332V9.16667H10.8332V12.9167C10.8332 14.0672 9.90042 15 8.74984 15C7.59924 15 6.6665 14.0672 6.6665 12.9167C6.6665 11.7661 7.59924 10.8333 8.74984 10.8333C8.8925 10.8333 9.03184 10.8477 9.1665 10.875Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FolderMusicLine;
