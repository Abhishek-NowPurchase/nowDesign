import React from 'react';

const MedicalAedElectrodesLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5.83333 3.33333C5.83333 2.8731 6.20643 2.5 6.66667 2.5H16.6667C17.1269 2.5 17.5 2.8731 17.5 3.33333V13.3333C17.5 13.7936 17.1269 14.1667 16.6667 14.1667H14.1667V16.6667C14.1667 17.1269 13.7936 17.5 13.3333 17.5H9.16667V19.1667H7.5V17.5H3.33333C2.8731 17.5 2.5 17.1269 2.5 16.6667V6.66667C2.5 6.20643 2.8731 5.83333 3.33333 5.83333H5.83333V3.33333ZM15.8333 12.5V4.16667H7.5V5.83333H13.3333C13.7936 5.83333 14.1667 6.20643 14.1667 6.66667V12.5H15.8333ZM4.16667 7.5V15.8333H12.5V7.5H4.16667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MedicalAedElectrodesLine;
