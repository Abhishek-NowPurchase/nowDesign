import React from 'react';

const MedicalDossierLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.1667 1.66663V3.33329H16.6667C17.1269 3.33329 17.5 3.70639 17.5 4.16663V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333H3.33333C2.8731 18.3333 2.5 17.9602 2.5 17.5V4.16663C2.5 3.70639 2.8731 3.33329 3.33333 3.33329H5.83333V1.66663H14.1667ZM5.83333 4.99996H4.16667V16.6666H15.8333V4.99996H14.1667V6.66663H5.83333V4.99996ZM10.8333 9.16662V10.8333H12.5V12.5H10.8325L10.8333 14.1666H9.16667L9.16583 12.5H7.5V10.8333H9.16667V9.16662H10.8333ZM12.5 3.33329H7.5V4.99996H12.5V3.33329Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MedicalDossierLine;
