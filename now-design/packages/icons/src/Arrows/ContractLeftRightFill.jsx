import React from 'react';

const ContractLeftRightFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.16666 15L9.16666 10L4.16666 5V15ZM15.8333 5L10.8333 10L15.8333 15V5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ContractLeftRightFill;
