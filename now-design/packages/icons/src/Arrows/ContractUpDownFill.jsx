import React from 'react';

const ContractUpDownFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15 4.16663L10 9.16663L5 4.16663H15ZM15 15.8333L10 10.8333L5 15.8333H15Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ContractUpDownFill;
