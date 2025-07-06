import React from 'react';

const GradesFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M6.66601 17.5H1.66602V10.8333H6.66601V17.5Z" fill="#E3E3E3"/>
      <path d="M12.4993 17.5H7.49935V2.5H12.4993V17.5Z" fill="#E3E3E3"/>
      <path d="M18.3327 17.5H13.3327V6.66667H18.3327V17.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default GradesFill;
