import React from 'react';

const UploadFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.5 15.8334H17.5V17.5001H2.5V15.8334ZM10.8333 8.33342V15.0001H9.16667V8.33342H3.33333L10 1.66675L16.6667 8.33342H10.8333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default UploadFill;
