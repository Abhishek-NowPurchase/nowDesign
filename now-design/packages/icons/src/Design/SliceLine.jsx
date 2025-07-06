import React from 'react';

const SliceLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.0757 10.7623L14.5489 12.2354C9.54017 17.2441 5.41542 17.2441 1.87988 16.0655L14.8435 3.10193L17.7897 6.0482L13.0757 10.7623ZM10.7187 10.7623L15.4327 6.0482L14.8435 5.45895L5.26208 15.0404C7.53838 15.1299 9.72683 14.285 12.1507 12.1942L10.7187 10.7623Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SliceLine;
