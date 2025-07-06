import React from 'react';

const CornerDownRightLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.16657 11.6666L4.16647 4.16665L5.83313 4.16663L5.83322 9.9999L14.3097 9.99998L11.0183 6.70852L12.1968 5.53001L17.5001 10.8333L12.1968 16.1367L11.0183 14.9581L14.3097 11.6667L4.16657 11.6666Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CornerDownRightLine;
