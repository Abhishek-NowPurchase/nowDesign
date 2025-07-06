import React from 'react';

const EqualLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15.8327 6.66663H4.16602V8.33329H15.8327V6.66663ZM15.8327 11.6666H4.16602V13.3333H15.8327V11.6666Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default EqualLine;
