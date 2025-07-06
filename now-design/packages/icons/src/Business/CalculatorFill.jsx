import React from 'react';

const CalculatorFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33333 1.66663H16.6667C17.1269 1.66663 17.5 2.03973 17.5 2.49996V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333H3.33333C2.8731 18.3333 2.5 17.9602 2.5 17.5V2.49996C2.5 2.03973 2.8731 1.66663 3.33333 1.66663ZM5.83333 9.99996V11.6666H7.5V9.99996H5.83333ZM5.83333 13.3333V15H7.5V13.3333H5.83333ZM9.16667 9.99996V11.6666H10.8333V9.99996H9.16667ZM9.16667 13.3333V15H10.8333V13.3333H9.16667ZM12.5 9.99996V15H14.1667V9.99996H12.5ZM5.83333 4.99996V8.33329H14.1667V4.99996H5.83333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CalculatorFill;
