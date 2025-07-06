import React from 'react';

const QualityReportFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M7.5 16.6667H2.5V11.6667H7.5V16.6667Z" fill="#E3E3E3"/>
      <path d="M14.1667 16.6667H9.16667V15H14.1667V16.6667Z" fill="#E3E3E3"/>
      <path d="M17.5 13.3334H9.16667V11.6667H17.5V13.3334Z" fill="#E3E3E3"/>
      <path d="M7.5 8.33337H2.5V3.33337H7.5V8.33337Z" fill="#E3E3E3"/>
      <path d="M14.1667 8.33337H9.16667V6.66671H14.1667V8.33337Z" fill="#E3E3E3"/>
      <path d="M17.5 5.00004H9.16667V3.33337H17.5V5.00004Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default QualityReportFill;
