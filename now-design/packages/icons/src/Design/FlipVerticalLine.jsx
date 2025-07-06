import React from 'react';

const FlipVerticalLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M18.3334 9.16662H1.66675V10.8333H18.3334V9.16662ZM15.0001 1.66663C15.9206 1.66663 16.6667 2.41282 16.6667 3.33329V5.83329C16.6667 6.75377 15.9206 7.49996 15.0001 7.49996H5.00008C4.07961 7.49996 3.33341 6.75377 3.33341 5.83329V3.33329C3.33341 2.41282 4.07961 1.66663 5.00008 1.66663H15.0001ZM15.0001 16.6666H5.00008V14.1666H15.0001V16.6666ZM16.6667 14.1666C16.6667 13.2461 15.9206 12.5 15.0001 12.5H5.00008C4.07961 12.5 3.33341 13.2461 3.33341 14.1666V16.6666C3.33341 17.5871 4.07961 18.3333 5.00008 18.3333H15.0001C15.9206 18.3333 16.6667 17.5871 16.6667 16.6666V14.1666Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FlipVerticalLine;
