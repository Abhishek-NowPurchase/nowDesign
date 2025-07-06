import React from 'react';

const UploadLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.5 15.8334H17.5V17.5001H2.5V15.8334ZM10.8333 4.85711V14.1667H9.16667V4.85711L4.10744 9.91633L2.92893 8.73783L10 1.66675L17.0711 8.73783L15.8926 9.91633L10.8333 4.85711Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default UploadLine;
