import React from 'react';

const EthLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M6.79034 12.7535L9.99967 17.1663L13.2091 12.7535L9.99967 14.7285L6.79034 12.7535ZM14.2808 10.1369L9.99967 3.18007L5.71852 10.1369L9.99967 12.7715L14.2808 10.1369ZM3.33301 10.8333L9.99967 0L16.6663 10.8333L9.99976 20L3.33301 10.8333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default EthLine;
