import React from 'react';

const CalculatorLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33333 1.66663H16.6667C17.1269 1.66663 17.5 2.03973 17.5 2.49996V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333H3.33333C2.8731 18.3333 2.5 17.9602 2.5 17.5V2.49996C2.5 2.03973 2.8731 1.66663 3.33333 1.66663ZM4.16667 3.33329V16.6666H15.8333V3.33329H4.16667ZM5.83333 4.99996H14.1667V8.33329H5.83333V4.99996ZM5.83333 9.99996H7.5V11.6666H5.83333V9.99996ZM5.83333 13.3333H7.5V15H5.83333V13.3333ZM9.16667 9.99996H10.8333V11.6666H9.16667V9.99996ZM9.16667 13.3333H10.8333V15H9.16667V13.3333ZM12.5 9.99996H14.1667V15H12.5V9.99996Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CalculatorLine;
