import React from 'react';

const TerminalWindowLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.6665 7.5V4.16667H3.33317V7.5H16.6665ZM16.6665 9.16667H3.33317V15.8333H16.6665V9.16667ZM2.49984 2.5H17.4998C17.9601 2.5 18.3332 2.8731 18.3332 3.33333V16.6667C18.3332 17.1269 17.9601 17.5 17.4998 17.5H2.49984C2.0396 17.5 1.6665 17.1269 1.6665 16.6667V3.33333C1.6665 2.8731 2.0396 2.5 2.49984 2.5ZM4.1665 10H6.6665V14.1667H4.1665V10ZM4.1665 5H5.83317V6.66667H4.1665V5ZM7.49984 5H9.1665V6.66667H7.49984V5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default TerminalWindowLine;
