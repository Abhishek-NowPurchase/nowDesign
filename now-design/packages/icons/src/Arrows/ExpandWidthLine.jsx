import React from 'react';

const ExpandWidthLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M1.66666 15V5H3.33332V15H1.66666ZM7.87478 5.87521L3.74999 10L7.87271 14.1227L9.05124 12.9443L6.94035 10.8333H13.059L10.9465 12.9458L12.125 14.1243L16.25 9.99958L12.1252 5.8748L10.9467 7.05332L13.0601 9.16667H6.94035L9.05332 7.05372L7.87478 5.87521ZM16.6667 5H18.3333V15H16.6667V5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ExpandWidthLine;
