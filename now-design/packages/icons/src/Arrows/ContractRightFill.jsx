import React from 'react';

const ContractRightFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M7.49991 4.1665L13.3335 10L7.49991 15.8332V10.8332L2.49993 10.8335L2.49991 9.16679L7.49991 9.16654V4.1665ZM14.9999 15.8333L15 4.16665H16.6667L16.6666 15.8333H14.9999Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ContractRightFill;
