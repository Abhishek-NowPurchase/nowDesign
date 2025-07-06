import React from 'react';

const CollapseVerticalFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.99958 11.2495L14.1243 15.3744L10.8329 15.3735V19.1662H9.16625V15.3731L5.87685 15.3723L9.99958 11.2495ZM9.16625 0.832886V4.62466L5.87521 4.62459L10 8.74954L14.1247 4.62477L10.8329 4.62469V0.832886H9.16625Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CollapseVerticalFill;
