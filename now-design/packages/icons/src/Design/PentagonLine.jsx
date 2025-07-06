import React from 'react';

const PentagonLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0002 2.52532L17.109 7.69014L14.3937 16.047H5.60676L2.89145 7.69014L10.0002 2.52532ZM18.956 7.09001L10.0002 0.583252L1.04443 7.09001L4.46523 17.6181H15.5352L18.956 7.09001Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PentagonLine;
