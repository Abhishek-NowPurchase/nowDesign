import React from 'react';

const TriangleLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.7216 2.50018L18.6602 16.2502C18.8903 16.6488 18.7538 17.1585 18.3552 17.3885C18.2285 17.4617 18.0848 17.5002 17.9385 17.5002H2.06136C1.60113 17.5002 1.22803 17.1271 1.22803 16.6669C1.22803 16.5205 1.26654 16.3769 1.33968 16.2502L9.27825 2.50018C9.50834 2.1016 10.018 1.96504 10.4166 2.19516C10.5433 2.2683 10.6485 2.3735 10.7216 2.50018ZM3.50474 15.8335H16.4951L9.99992 4.58352L3.50474 15.8335Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default TriangleLine;
