import React from 'react';

const RefundLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.6709 6.66667V4.16667H3.33757V6.66667H16.6709ZM16.6709 8.33333H3.33757V15.8333H16.6709V8.33333ZM2.50423 2.5H17.5042C17.9645 2.5 18.3376 2.8731 18.3376 3.33333V16.6667C18.3376 17.1269 17.9645 17.5 17.5042 17.5H2.50423C2.044 17.5 1.6709 17.1269 1.6709 16.6667V3.33333C1.6709 2.8731 2.044 2.5 2.50423 2.5ZM9.17092 11.6667H14.1709V13.3333H5.4209L9.17092 9.58333V11.6667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default RefundLine;
