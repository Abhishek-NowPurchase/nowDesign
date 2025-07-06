import React from 'react';

const Folder6Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.49984 2.5C2.0396 2.5 1.6665 2.8731 1.6665 3.33333V5.83333H7.98799L9.99984 3.82149L8.67834 2.5H2.49984ZM12.0117 4.16667L8.67834 7.5H1.6665V16.6667C1.6665 17.1269 2.0396 17.5 2.49984 17.5H17.4998C17.9601 17.5 18.3332 17.1269 18.3332 16.6667V5C18.3332 4.53977 17.9601 4.16667 17.4998 4.16667H12.0117Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Folder6Fill;
