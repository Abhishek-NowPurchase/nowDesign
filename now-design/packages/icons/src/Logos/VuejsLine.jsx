import React from 'react';

const VuejsLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.76381 2.5L10.0007 15L17.2375 2.5H19.1673L10.0007 18.3333L0.833984 2.5H2.76381ZM6.38223 2.5L10.0007 8.75L13.6191 2.5H15.5489L10.0007 12.0833L4.4524 2.5H6.38223Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default VuejsLine;
