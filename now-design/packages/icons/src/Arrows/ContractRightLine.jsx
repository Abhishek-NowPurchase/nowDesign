import React from 'react';

const ContractRightLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.1429 9.16652L6.26213 5.28582L7.44064 4.1073L13.3332 9.99986L7.44064 15.8924L6.26213 14.7139L10.1428 10.8332L2.49966 10.8333L2.49963 9.16661L10.1429 9.16652ZM14.9997 15.8331V4.16648H16.6663V15.8331H14.9997Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ContractRightLine;
