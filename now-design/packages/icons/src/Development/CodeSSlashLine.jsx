import React from 'react';

const CodeSSlashLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M20 10L15.2859 14.7141L14.1074 13.5355L17.643 10L14.1074 6.46447L15.2859 5.28596L20 10ZM2.35702 10L5.89256 13.5355L4.71404 14.7141L0 10L4.71404 5.28596L5.89256 6.46447L2.35702 10ZM8.15704 17.5H6.38341L11.843 2.5H13.6166L8.15704 17.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CodeSSlashLine;
