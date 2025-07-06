import React from 'react';

const InstanceFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0002 0.833374L17.9168 5.41671V14.5834L10.0002 19.1667L2.0835 14.5834V5.41671L10.0002 0.833374ZM5.41596 8.30912L9.16683 10.4807V14.6877H10.8335V10.4807L14.5843 8.30912L13.7493 6.86675L10.0002 9.03729L6.25103 6.86674L5.41596 8.30912Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default InstanceFill;
