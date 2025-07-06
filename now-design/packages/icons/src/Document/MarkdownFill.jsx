import React from 'react';

const MarkdownFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.49984 2.5H17.4998C17.9601 2.5 18.3332 2.8731 18.3332 3.33333V16.6667C18.3332 17.1269 17.9601 17.5 17.4998 17.5H2.49984C2.0396 17.5 1.6665 17.1269 1.6665 16.6667V3.33333C1.6665 2.8731 2.0396 2.5 2.49984 2.5ZM5.83317 12.9167V9.58333L7.49984 11.25L9.1665 9.58333V12.9167H10.8332V7.08333H9.1665L7.49984 8.75L5.83317 7.08333H4.1665V12.9167H5.83317ZM14.9998 10.4167V7.08333H13.3332V10.4167H11.6665L14.1665 12.9167L16.6665 10.4167H14.9998Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MarkdownFill;
