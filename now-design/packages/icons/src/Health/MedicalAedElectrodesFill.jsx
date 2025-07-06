import React from 'react';

const MedicalAedElectrodesFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M6.66667 2.5C6.20643 2.5 5.83333 2.8731 5.83333 3.33333V5.83333H3.33333C2.8731 5.83333 2.5 6.20643 2.5 6.66667V16.6667C2.5 17.1269 2.8731 17.5 3.33333 17.5H7.5V19.1667H9.16667V17.5H13.3333C13.7936 17.5 14.1667 17.1269 14.1667 16.6667V14.1667H16.6667C17.1269 14.1667 17.5 13.7936 17.5 13.3333V3.33333C17.5 2.8731 17.1269 2.5 16.6667 2.5H6.66667ZM14.1667 12.5V6.66667C14.1667 6.20643 13.7936 5.83333 13.3333 5.83333H7.5V4.16667H15.8333V12.5H14.1667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MedicalAedElectrodesFill;
