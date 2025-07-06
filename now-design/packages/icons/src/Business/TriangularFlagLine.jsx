import React from 'react';

const TriangularFlagLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5.00004 4.28652V13.3335H15.2826L5.00004 4.28652ZM3.33337 2.44335C3.33337 1.72631 4.17884 1.34406 4.71717 1.81771L18.0418 13.5412C18.6186 14.0487 18.2597 15.0002 17.4914 15.0002H5.00004V18.3334H3.33337V2.44335Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default TriangularFlagLine;
