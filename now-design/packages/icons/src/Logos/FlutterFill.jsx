import React from 'react';

const FlutterFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M11.2532 1.66748L2.91992 10.0008L5.48936 12.5702L16.3894 1.66748H11.2532ZM11.2487 9.33241L6.7694 13.8499L11.2463 18.3332H16.4035L11.9146 13.8332L16.4047 9.33316L11.2487 9.33241Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FlutterFill;
