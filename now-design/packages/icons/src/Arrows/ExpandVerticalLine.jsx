import React from 'react';

const ExpandVerticalLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.99958 0.41626L14.1243 4.54105L12.9458 5.71956L10.8329 3.60662V8.33293H9.16625V3.60662L7.05536 5.71749L5.87685 4.53898L9.99958 0.41626ZM9.16625 11.6663V16.392L7.05373 14.2794L5.87521 15.458L10 19.5829L14.1247 15.4582L12.9462 14.2797L10.8329 16.393V11.6663H9.16625Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ExpandVerticalLine;
