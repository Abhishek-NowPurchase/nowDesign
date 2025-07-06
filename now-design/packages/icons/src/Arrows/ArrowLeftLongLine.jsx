import React from 'react';

const ArrowLeftLongLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M18.3336 10.8335L18.3337 9.16687H4.85703L8.14847 5.87541L6.96996 4.6969L1.66666 10.0002L6.96996 15.3035L8.14847 14.125L4.85699 10.8335L18.3336 10.8335Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowLeftLongLine;
