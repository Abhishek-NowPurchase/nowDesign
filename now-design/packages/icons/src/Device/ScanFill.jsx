import React from 'react';

const ScanFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.54738 4.72602L9.99984 11.1785L11.1783 9.99996L4.72589 3.5475C6.16245 2.37193 7.99878 1.66663 9.99984 1.66663C14.6022 1.66663 18.3332 5.39758 18.3332 9.99996C18.3332 14.6023 14.6022 18.3333 9.99984 18.3333C5.39746 18.3333 1.6665 14.6023 1.6665 9.99996C1.6665 7.9989 2.37181 6.16258 3.54738 4.72602Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ScanFill;
