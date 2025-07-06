import React from 'react';

const ArrowRightDoubleLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15.9702 9.99997L10.7976 4.82739L9.61908 6.0059L13.6132 9.99997L9.61908 13.9941L10.7976 15.1726L15.9702 9.99997ZM11.2619 9.99997L6.08935 4.82739L4.91084 6.0059L8.90492 9.99997L4.91084 13.9941L6.08935 15.1726L11.2619 9.99997Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowRightDoubleLine;
