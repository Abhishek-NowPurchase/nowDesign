import React from 'react';

const ContractLeftFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M12.5001 4.1665V9.16654L17.5001 9.16679V10.8335L12.5001 10.8332V15.8332L6.66655 10L12.5001 4.1665ZM3.33339 15.8333V4.16665H5.00006V15.8333H3.33339Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ContractLeftFill;
