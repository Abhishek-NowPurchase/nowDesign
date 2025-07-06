import React from 'react';

const MapPin3Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.16667 16.6209C5.41671 16.2063 2.5 13.0271 2.5 9.16663C2.5 5.02449 5.85787 1.66663 10 1.66663C14.1422 1.66663 17.5 5.02449 17.5 9.16663C17.5 13.0271 14.5833 16.2063 10.8333 16.6209V20H9.16667V16.6209Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MapPin3Fill;
