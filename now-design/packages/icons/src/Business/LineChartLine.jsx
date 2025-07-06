import React from 'react';

const LineChartLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.16667 2.5V15.8333H17.5V17.5H2.5V2.5H4.16667ZM16.9107 5.24408L18.0892 6.42259L13.3333 11.1785L10.8333 8.67917L7.25592 12.2559L6.07741 11.0774L10.8333 6.32149L13.3333 8.82083L16.9107 5.24408Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default LineChartLine;
