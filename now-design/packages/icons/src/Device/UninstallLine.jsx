import React from 'react';

const UninstallLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M6.66667 1.66663V3.33329H4.16667L4.16583 11.6666H15.8325L15.8333 3.33329H13.3333V1.66663H16.6667C17.1269 1.66663 17.5 2.03973 17.5 2.49996V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333H3.33333C2.8731 18.3333 2.5 17.9602 2.5 17.5V2.49996C2.5 2.03973 2.8731 1.66663 3.33333 1.66663H6.66667ZM15.8325 13.3333H4.16583L4.16667 16.6666H15.8333L15.8325 13.3333ZM14.1667 14.1666V15.8333H12.5V14.1666H14.1667ZM10 1.66663L13.3333 4.99996H10.8333V9.16662H9.16667V4.99996H6.66667L10 1.66663Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default UninstallLine;
