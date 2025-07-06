import React from 'react';

const FolderOpenFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.49984 17.5C2.0396 17.5 1.6665 17.1269 1.6665 16.6667V3.33333C1.6665 2.8731 2.0396 2.5 2.49984 2.5H8.67834L10.345 4.16667H16.6665C17.1268 4.16667 17.4998 4.53977 17.4998 5V7.5H3.33317V15.83L4.99984 9.16667H18.7498L16.8243 16.8687C16.7316 17.2397 16.3983 17.5 16.0158 17.5H2.49984Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FolderOpenFill;
