import React from 'react';

const ContractUpDownLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.82738 4.33928L10 9.51188L15.1726 4.33928L13.994 3.16077L10 7.15484L6.00589 3.16077L4.82738 4.33928ZM15.1727 15.6606L10.0001 10.488L4.8275 15.6606L6.00601 16.8391L10.0001 12.845L13.9942 16.8391L15.1727 15.6606Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ContractUpDownLine;
