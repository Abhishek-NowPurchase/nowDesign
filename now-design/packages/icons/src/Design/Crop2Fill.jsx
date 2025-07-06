import React from 'react';

const Crop2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.6549 4.16663L16.7852 2.03633L17.9637 3.21484L15.8334 5.34513V14.1666H18.3334V15.8333H15.8334V18.3333H14.1667V5.83329H7.50008V4.16663H14.6549ZM12.5001 14.1666V15.8333H5.00008C4.53985 15.8333 4.16675 15.4602 4.16675 15V5.83329H1.66675V4.16663H4.16675V1.66663H5.83341V14.1666H12.5001ZM7.50008 7.49996H12.5001V12.5H7.50008V7.49996Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Crop2Fill;
