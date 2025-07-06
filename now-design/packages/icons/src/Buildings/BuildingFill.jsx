import React from 'react';

const BuildingFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.5 15.8333H19.1666V17.5H0.833313V15.8333H2.49998V3.33333C2.49998 2.8731 2.87308 2.5 3.33331 2.5H11.6666C12.1269 2.5 12.5 2.8731 12.5 3.33333V15.8333H14.1666V7.5H16.6666C17.1269 7.5 17.5 7.8731 17.5 8.33333V15.8333ZM5.83331 9.16667V10.8333H9.16665V9.16667H5.83331ZM5.83331 5.83333V7.5H9.16665V5.83333H5.83331Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default BuildingFill;
