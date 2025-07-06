import React from 'react';

const TriangularFlagFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.71717 1.81771C4.17884 1.34406 3.33337 1.72631 3.33337 2.44335V18.3334H5.00004V15.0002H17.4914C18.2597 15.0002 18.6186 14.0487 18.0418 13.5412L4.71717 1.81771Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default TriangularFlagFill;
