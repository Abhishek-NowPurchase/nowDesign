import React from 'react';

const ArticleLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.6667 18.3333H3.33333C2.8731 18.3333 2.5 17.9602 2.5 17.5V2.49996C2.5 2.03973 2.8731 1.66663 3.33333 1.66663H16.6667C17.1269 1.66663 17.5 2.03973 17.5 2.49996V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333ZM15.8333 16.6666V3.33329H4.16667V16.6666H15.8333ZM5.83333 4.99996H9.16667V8.33329H5.83333V4.99996ZM5.83333 9.99996H14.1667V11.6666H5.83333V9.99996ZM5.83333 13.3333H14.1667V15H5.83333V13.3333ZM10.8333 5.83329H14.1667V7.49996H10.8333V5.83329Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArticleLine;
