import React from 'react';

const ArrowRightDownLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M12.1579 13.336L4.98576 6.16387L6.16427 4.98535L13.3364 12.1575V5.83604H15.0031V15.0027H5.83644V13.336H12.1579Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowRightDownLine;
