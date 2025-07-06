import React from 'react';

const DriveLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M7.58151 5.12511L3.59207 12.0359L5.05425 14.5622L9.04216 7.65496L7.58151 5.12511ZM6.49783 15.3952H14.4712L15.9305 12.8667H7.95763L6.49783 15.3952ZM15.9261 11.2L11.938 4.29167H9.02482L13.0133 11.2H15.9261ZM7.10033 2.625H12.9003L18.3337 12.037L15.4337 17.0618H4.57532L1.66699 12.037L7.10033 2.625ZM10.0044 9.32165L8.91991 11.2H11.0888L10.0044 9.32165Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default DriveLine;
