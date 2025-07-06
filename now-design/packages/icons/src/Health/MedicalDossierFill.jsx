import React from 'react';

const MedicalDossierFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.1667 1.66663V3.33329H16.6667C17.1269 3.33329 17.5 3.70639 17.5 4.16663V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333H3.33333C2.8731 18.3333 2.5 17.9602 2.5 17.5V4.16663C2.5 3.70639 2.8731 3.33329 3.33333 3.33329H5.83333V1.66663H14.1667ZM10.8333 9.16662H9.16667V10.8333H7.5V12.5H9.16583L9.16667 14.1666H10.8333L10.8325 12.5H12.5V10.8333H10.8333V9.16662ZM12.5 3.33329H7.5V4.99996H12.5V3.33329Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MedicalDossierFill;
