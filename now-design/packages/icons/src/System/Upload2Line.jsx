import React from 'react';

const Upload2Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33268 15.8333H16.666V10H18.3327V16.6667C18.3327 17.1269 17.9596 17.5 17.4993 17.5H2.49935C2.03912 17.5 1.66602 17.1269 1.66602 16.6667V10H3.33268V15.8333ZM10.8327 7.5V13.3333H9.16601V7.5H4.99935L9.99935 2.5L14.9993 7.5H10.8327Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Upload2Line;
