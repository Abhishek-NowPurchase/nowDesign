import React from 'react';

const KickLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.5 1.6665H9.16675V3.33315H10.8334V1.6665H17.5V8.33311H15.8333V11.6664H17.5V18.3331H10.8334V16.6665H9.16675V18.3331H2.5V1.6665ZM10.8334 14.9999H12.5001V16.6665H15.8333V13.333H14.1667V11.6665H12.5V8.3331H14.1667V6.66645H15.8333V3.33317H12.5001V4.99982H10.8334V6.66647H7.50008V3.33317H4.16667V16.6665H7.50008V13.3332H10.8334V14.9999Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default KickLine;
