import React from 'react';

const DriveFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M6.6173 3.45497L9.51841 8.47992L4.56867 17.0573L1.66699 12.0333L6.6173 3.45497ZM8.43041 12.0333H18.3337L15.432 17.0573H5.5298L8.43041 12.0333ZM12.0494 11.1999L7.09865 2.62085H12.902L17.8527 11.1999H12.0494Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default DriveFill;
