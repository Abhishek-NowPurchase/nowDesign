import React from 'react';

const CropFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15.8334 14.1666H18.3334V15.8333H15.8334V18.3333H14.1667V15.8333H5.00008C4.53985 15.8333 4.16675 15.4602 4.16675 15V5.83329H1.66675V4.16663H4.16675V1.66663H5.83341V4.16663H15.0001C15.4603 4.16663 15.8334 4.53973 15.8334 4.99996V14.1666Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CropFill;
