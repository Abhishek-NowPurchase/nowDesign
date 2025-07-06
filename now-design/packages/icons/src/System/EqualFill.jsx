import React from 'react';

const EqualFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15.8337 6.66663H4.16699V8.33329H15.8337V6.66663ZM15.8337 11.6666H4.16699V13.3333H15.8337V11.6666Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default EqualFill;
