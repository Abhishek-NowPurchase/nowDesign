import React from 'react';

const TensileFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M12.215 7.86263V10.9461L7.77897 9.4943V7.86263L2.09375 6.4458L2.09375 2.90332L17.9002 2.90332V6.4458L12.215 7.86263Z" fill="#E3E3E3"/>
      <path d="M17.901 17.9033H2.09456L2.09456 14.6107L7.77978 13.2931L7.77978 10.3936L12.2158 11.8454V13.2931L17.901 14.6107V17.9033Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default TensileFill;
