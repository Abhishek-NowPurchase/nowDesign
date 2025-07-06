import React from 'react';

const ArrowRightLongLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M1.66644 10.8335L1.66632 9.16687H15.1429L11.8515 5.87541L13.03 4.6969L18.3333 10.0002L13.03 15.3035L11.8515 14.125L15.143 10.8335L1.66644 10.8335Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowRightLongLine;
