import React from 'react';

const TensileLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.215 7.86182V10.9453L7.77978 9.4943L7.77897 7.86182L2.09456 6.44499L2.09375 2.90332L17.9002 2.90332V6.44499L12.215 7.86182ZM3.34375 4.15332V5.46842L9.02897 6.88525V8.58773L10.965 9.22168V6.88525L16.6502 5.46843V4.15332L3.34375 4.15332Z" fill="#E3E3E3"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.09456 17.9033L2.09456 14.6107L7.77978 13.2931V10.3936L12.215 11.8454L12.2158 13.2931L17.9002 14.6107L17.901 17.9033H2.09456ZM10.9658 14.2868V12.752L9.02978 12.118V14.2868L3.34456 15.6035V16.6533H16.651V15.6035L10.9658 14.2868Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default TensileLine;
