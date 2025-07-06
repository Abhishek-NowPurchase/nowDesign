import React from 'react';

const FolderKeyholeFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M8.67834 2.5L10.345 4.16667H17.4998C17.9601 4.16667 18.3332 4.53977 18.3332 5V16.6667C18.3332 17.1269 17.9601 17.5 17.4998 17.5H2.49984C2.0396 17.5 1.6665 17.1269 1.6665 16.6667V3.33333C1.6665 2.8731 2.0396 2.5 2.49984 2.5H8.67834ZM9.99984 7.5C9.07934 7.5 8.33317 8.24619 8.33317 9.16667C8.33317 9.78358 8.66834 10.3222 9.16642 10.6103L9.1665 14.1667H10.8332L10.8341 10.6098C11.3318 10.3215 11.6665 9.78317 11.6665 9.16667C11.6665 8.24619 10.9203 7.5 9.99984 7.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FolderKeyholeFill;
