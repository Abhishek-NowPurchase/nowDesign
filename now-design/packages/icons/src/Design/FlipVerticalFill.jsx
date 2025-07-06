import React from 'react';

const FlipVerticalFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M18.3334 9.16662H1.66675V10.8333H18.3334V9.16662ZM15.0001 5.83329H5.00008V3.33329H15.0001V5.83329ZM16.6667 3.33329C16.6667 2.41282 15.9206 1.66663 15.0001 1.66663H5.00008C4.07961 1.66663 3.33341 2.41282 3.33341 3.33329V5.83329C3.33341 6.75377 4.07961 7.49996 5.00008 7.49996H15.0001C15.9206 7.49996 16.6667 6.75377 16.6667 5.83329V3.33329ZM15.0001 12.5C15.9206 12.5 16.6667 13.2461 16.6667 14.1666V16.6666C16.6667 17.5871 15.9206 18.3333 15.0001 18.3333H5.00008C4.07961 18.3333 3.33341 17.5871 3.33341 16.6666V14.1666C3.33341 13.2461 4.07961 12.5 5.00008 12.5H15.0001Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FlipVerticalFill;
