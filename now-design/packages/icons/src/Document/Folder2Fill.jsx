import React from 'react';

const Folder2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M18.3332 9.16667V16.6667C18.3332 17.1269 17.9601 17.5 17.4998 17.5H2.49984C2.0396 17.5 1.6665 17.1269 1.6665 16.6667V9.16667H18.3332ZM18.3332 7.5H1.6665V3.33333C1.6665 2.8731 2.0396 2.5 2.49984 2.5H8.67834L10.345 4.16667H17.4998C17.9601 4.16667 18.3332 4.53977 18.3332 5V7.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Folder2Fill;
