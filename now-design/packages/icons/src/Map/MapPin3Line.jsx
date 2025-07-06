import React from 'react';

const MapPin3Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.16667 16.6209C5.41671 16.2063 2.5 13.0271 2.5 9.16663C2.5 5.02449 5.85787 1.66663 10 1.66663C14.1422 1.66663 17.5 5.02449 17.5 9.16663C17.5 13.0271 14.5833 16.2063 10.8333 16.6209V20H9.16667V16.6209ZM10 15C13.2217 15 15.8333 12.3883 15.8333 9.16663C15.8333 5.94497 13.2217 3.33329 10 3.33329C6.77834 3.33329 4.16667 5.94497 4.16667 9.16663C4.16667 12.3883 6.77834 15 10 15Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MapPin3Line;
