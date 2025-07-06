import React from 'react';

const BarcodeBoxFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.49984 2.5H17.4998C17.9601 2.5 18.3332 2.8731 18.3332 3.33333V16.6667C18.3332 17.1269 17.9601 17.5 17.4998 17.5H2.49984C2.0396 17.5 1.6665 17.1269 1.6665 16.6667V3.33333C1.6665 2.8731 2.0396 2.5 2.49984 2.5ZM4.99984 5.83333V14.1667H7.49984V5.83333H4.99984ZM8.33317 5.83333V14.1667H9.99984V5.83333H8.33317ZM10.8332 5.83333V14.1667H11.6665V5.83333H10.8332ZM12.4998 5.83333V14.1667H14.9998V5.83333H12.4998Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default BarcodeBoxFill;
