import React from 'react';

const QualityReportLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.16667 3.33337H17.5V5.00004H9.16667V3.33337ZM9.16667 6.66671H14.1667V8.33337H9.16667V6.66671ZM9.16667 11.6667H17.5V13.3334H9.16667V11.6667ZM9.16667 15H14.1667V16.6667H9.16667V15ZM2.5 3.33337H7.5V8.33337H2.5V3.33337ZM4.16667 5.00004V6.66671H5.83333V5.00004H4.16667ZM2.5 11.6667H7.5V16.6667H2.5V11.6667ZM4.16667 13.3334V15H5.83333V13.3334H4.16667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default QualityReportLine;
