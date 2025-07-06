import React from 'react';

const ContractLeftRightLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15.6608 4.82739L10.4883 10L15.6608 15.1726L16.8393 13.994L12.8453 10L16.8393 6.0059L15.6608 4.82739ZM4.33913 15.1727L9.51168 10.0001L4.33913 4.82752L3.16061 6.00603L7.1547 10.0001L3.16061 13.9942L4.33913 15.1727Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ContractLeftRightLine;
