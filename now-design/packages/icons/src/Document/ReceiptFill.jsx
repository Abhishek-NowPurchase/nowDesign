import React from 'react';

const ReceiptFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M7.5 3.33329L5 1.66663L2.5 3.33329V13.3333V15.8333C2.5 17.214 3.61929 18.3333 5 18.3333H16.6667C18.0474 18.3333 19.1667 17.214 19.1667 15.8333V14.1666H5.83333V15.8333C5.83333 16.2935 5.46023 16.6666 5 16.6666C4.53977 16.6666 4.16667 16.2935 4.16667 15.8333V12.5H17.5V3.33329L15 1.66663L12.5 3.33329L10 1.66663L7.5 3.33329Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ReceiptFill;
