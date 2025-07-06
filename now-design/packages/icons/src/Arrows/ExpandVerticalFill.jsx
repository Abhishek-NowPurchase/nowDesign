import React from 'react';

const ExpandVerticalFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.99958 0.41626L14.1243 4.54105L10.8329 4.54023V8.33293H9.16625V4.53981L5.87685 4.53898L9.99958 0.41626ZM9.16625 11.6663V15.458H5.87521L10 19.5829L14.1247 15.4582L10.8329 15.4581V11.6663H9.16625Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ExpandVerticalFill;
