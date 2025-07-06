import React from 'react';

const InstanceLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.75016 6.37763V13.6225L10.0002 17.2409L16.2502 13.6225V6.37763L10.0002 2.75921L3.75016 6.37763ZM10.0002 0.833374L17.9168 5.41671V14.5834L10.0002 19.1667L2.0835 14.5834V5.41671L10.0002 0.833374ZM5.41596 8.30892L9.16683 10.4805V14.6875H10.8335V10.4805L14.5843 8.30893L13.7493 6.86654L10.0002 9.03712L6.25103 6.86654L5.41596 8.30892Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default InstanceLine;
