import React from 'react';

const Upload2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33268 15.8334H16.666V10.0001H18.3327V16.6667C18.3327 17.127 17.9596 17.5001 17.4993 17.5001H2.49935C2.03912 17.5001 1.66602 17.127 1.66602 16.6667V10.0001H3.33268V15.8334ZM11.666 7.50008V12.5001H8.33268V7.50008H4.16602L9.99935 1.66675L15.8327 7.50008H11.666Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Upload2Fill;
