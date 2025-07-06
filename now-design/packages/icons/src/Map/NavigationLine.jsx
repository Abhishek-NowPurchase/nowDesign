import React from 'react';

const NavigationLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.13789 4.24684L7.09274 14.5888L9.62665 9.52104L14.3238 7.64214L4.13789 4.24684ZM2.41669 1.91628L18.0882 7.14011C18.3065 7.21288 18.4245 7.44884 18.3517 7.66715C18.313 7.78343 18.225 7.87674 18.1112 7.92226L10.834 10.8331L7.14633 18.2084C7.04341 18.4142 6.79314 18.4976 6.58731 18.3947C6.48284 18.3425 6.40509 18.2488 6.37301 18.1365L1.8843 2.42604C1.82109 2.20477 1.9492 1.97415 2.17047 1.91093C2.25121 1.88786 2.33704 1.88973 2.41669 1.91628Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default NavigationLine;
