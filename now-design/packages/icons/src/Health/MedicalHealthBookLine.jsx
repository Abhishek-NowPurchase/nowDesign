import React from 'react';

const MedicalHealthBookLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.6667 1.66663C17.1269 1.66663 17.5 2.03973 17.5 2.49996V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333H5C4.53977 18.3333 4.16667 17.9602 4.16667 17.5V15.8333H2.5V14.1666H4.16667V12.5H2.5V10.8333H4.16667V9.16662H2.5V7.49996H4.16667V5.83329H2.5V4.16663H4.16667V2.49996C4.16667 2.03973 4.53977 1.66663 5 1.66663H16.6667ZM15.8333 3.33329H5.83333V16.6666H15.8333V3.33329ZM11.6667 6.66663V9.16662H14.1667V10.8333H11.6658L11.6667 13.3333H10L9.99917 10.8333H7.5V9.16662H10V6.66663H11.6667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MedicalHealthBookLine;
