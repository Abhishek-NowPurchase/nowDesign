import React from 'react';

const StackOverflowFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15.0007 16.6688V12.2244H16.6673V18.3355H3.33398V12.2244H5.00065V16.6688H15.0007ZM6.33298 12.2799L6.594 10.6305L13.9582 12.0467L13.8638 13.3684L6.33298 12.2799ZM7.33264 8.50341L7.94354 7.17052L14.608 10.2806L13.9971 11.6135L7.33264 8.50341ZM9.22092 5.22673L10.165 4.116L15.8298 8.83666L14.8857 9.94733L9.22092 5.22673ZM12.8308 1.78345L17.2183 7.67036L16.0519 8.55891L11.6645 2.67204L12.8308 1.78345ZM6.11083 15.5566V13.8905H13.886V15.5566H6.11083Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default StackOverflowFill;
