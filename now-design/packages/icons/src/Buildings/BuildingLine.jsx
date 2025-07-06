import React from 'react';

const BuildingLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.5 15.8333H19.1666V17.5H0.833313V15.8333H2.49998V3.33333C2.49998 2.8731 2.87308 2.5 3.33331 2.5H11.6666C12.1269 2.5 12.5 2.8731 12.5 3.33333V15.8333H15.8333V9.16667H14.1666V7.5H16.6666C17.1269 7.5 17.5 7.8731 17.5 8.33333V15.8333ZM4.16665 4.16667V15.8333H10.8333V4.16667H4.16665ZM5.83331 9.16667H9.16665V10.8333H5.83331V9.16667ZM5.83331 5.83333H9.16665V7.5H5.83331V5.83333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default BuildingLine;
