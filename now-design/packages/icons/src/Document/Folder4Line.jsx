import React from 'react';

const Folder4Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.345 4.16667H17.4998C17.9601 4.16667 18.3332 4.53977 18.3332 5V16.6667C18.3332 17.1269 17.9601 17.5 17.4998 17.5H2.49984C2.0396 17.5 1.6665 17.1269 1.6665 16.6667V3.33333C1.6665 2.8731 2.0396 2.5 2.49984 2.5H8.67834L10.345 4.16667ZM6.6665 15.8333H16.6665V9.16667H6.6665V15.8333ZM4.99984 15.8333V8.33333C4.99984 7.8731 5.37294 7.5 5.83317 7.5H16.6665V5.83333H9.65467L7.98799 4.16667H3.33317V15.8333H4.99984Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Folder4Line;
