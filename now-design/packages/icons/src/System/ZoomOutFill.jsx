import React from 'react';

const ZoomOutFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15.0262 13.8474L18.5951 17.4163L17.4166 18.5948L13.8477 15.0259C12.5644 16.0526 10.937 16.6667 9.16699 16.6667C5.02699 16.6667 1.66699 13.3067 1.66699 9.16675C1.66699 5.02675 5.02699 1.66675 9.16699 1.66675C13.307 1.66675 16.667 5.02675 16.667 9.16675C16.667 10.9367 16.0528 12.5642 15.0262 13.8474ZM5.83366 8.33341V10.0001H12.5003V8.33341H5.83366Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ZoomOutFill;
