import React from 'react';

const ExpandVerticalSFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.1244 6.20768L9.99959 2.08289L5.87688 6.20561L9.16625 6.20644V13.7913H5.87526L10 17.9162L14.1248 13.7915L10.8329 13.7914V6.20685L14.1244 6.20768Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ExpandVerticalSFill;
