import React from 'react';

const MedicalPulseLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M7.49968 6.28213L12.4997 17.9488L15.5492 10.8333H19.1663V9.16662H14.4502L12.4997 13.7178L7.49968 2.05115L4.45017 9.16662H0.833008V10.8333H5.54918L7.49968 6.28213Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MedicalPulseLine;
