import React from 'react';

const MaterialTestFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M8.92318 13.5059L5.00065 17.4284L2.32812 14.7559L3.50651 13.5775L5.00065 15.0717L7.74479 12.3275L8.92318 13.5059Z" fill="#E3E3E3"/>
      <path d="M17.5007 16.6667H10.834V15H17.5007V16.6667Z" fill="#E3E3E3"/>
      <path d="M17.5007 10.8334H10.834V9.16671H17.5007V10.8334Z" fill="#E3E3E3"/>
      <path d="M8.33398 3.33337V9.16671H2.50065V3.33337H8.33398Z" fill="#E3E3E3"/>
      <path d="M17.5007 5.00004H10.834V3.33337H17.5007V5.00004Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MaterialTestFill;
