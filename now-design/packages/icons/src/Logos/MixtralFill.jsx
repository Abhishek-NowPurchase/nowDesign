import React from 'react';

const MixtralFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.5 2.5H5.5V5.5L8.50008 5.50008V8.50008L11.5 8.50017V5.50008H14.4999V2.5H17.4999V17.4999H14.4999V11.5002L11.5 11.4998V14.4998H8.5V11.5002L5.5 11.4998V17.4999H2.5V2.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MixtralFill;
