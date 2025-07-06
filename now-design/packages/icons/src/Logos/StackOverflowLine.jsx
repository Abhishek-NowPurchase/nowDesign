import React from 'react';

const StackOverflowLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15.0007 16.6687V12.5H16.6673V18.3354H3.33398V12.5H5.00065V16.6687H15.0007ZM6.25065 15V13.3334H13.7507V15H6.25065ZM6.31483 11.3497L6.60425 9.70829L13.9903 11.0107L13.7009 12.652L6.31483 11.3497ZM7.67613 6.76336L8.5095 5.31998L15.0047 9.06996L14.1713 10.5134L7.67613 6.76336ZM10.5239 2.91921L11.8007 1.8479L16.6216 7.59323L15.3448 8.66454L10.5239 2.91921Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default StackOverflowLine;
