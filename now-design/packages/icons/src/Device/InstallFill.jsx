import React from 'react';

const InstallFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.16667 1.66663V5.83329H6.66667L10 9.16662L13.3333 5.83329H10.8333V1.66663H16.6667C17.1269 1.66663 17.5 2.03973 17.5 2.49996V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333H3.33333C2.8731 18.3333 2.5 17.9602 2.5 17.5V2.49996C2.5 2.03973 2.8731 1.66663 3.33333 1.66663H9.16667ZM15.8333 13.3333H4.16667V16.6666H15.8333V13.3333ZM14.1667 14.1666V15.8333H12.5V14.1666H14.1667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default InstallFill;
