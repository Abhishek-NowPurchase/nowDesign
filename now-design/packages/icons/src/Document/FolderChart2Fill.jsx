import React from 'react';

const FolderChart2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.345 4.16667H17.4998C17.9601 4.16667 18.3332 4.53977 18.3332 5V16.6667C18.3332 17.1269 17.9601 17.5 17.4998 17.5H2.49984C2.0396 17.5 1.6665 17.1269 1.6665 16.6667V3.33333C1.6665 2.8731 2.0396 2.5 2.49984 2.5H8.67834L10.345 4.16667ZM9.99984 7.5C8.15889 7.5 6.6665 8.99242 6.6665 10.8333C6.6665 12.6742 8.15889 14.1667 9.99984 14.1667C11.8408 14.1667 13.3332 12.6742 13.3332 10.8333H9.99984V7.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FolderChart2Fill;
