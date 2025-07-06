import React from 'react';

const FolderImageLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33317 4.16667V15.8333H16.6665V5.83333H9.65467L7.98799 4.16667H3.33317ZM10.345 4.16667H17.4998C17.9601 4.16667 18.3332 4.53977 18.3332 5V16.6667C18.3332 17.1269 17.9601 17.5 17.4998 17.5H2.49984C2.0396 17.5 1.6665 17.1269 1.6665 16.6667V3.33333C1.6665 2.8731 2.0396 2.5 2.49984 2.5H8.67834L10.345 4.16667ZM8.33317 8.75C8.33317 9.44033 7.77353 10 7.08317 10C6.39281 10 5.83317 9.44033 5.83317 8.75C5.83317 8.05964 6.39281 7.5 7.08317 7.5C7.77353 7.5 8.33317 8.05964 8.33317 8.75ZM14.9998 14.1667L11.6665 9.16667L5.83317 14.1667H14.9998Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FolderImageLine;
