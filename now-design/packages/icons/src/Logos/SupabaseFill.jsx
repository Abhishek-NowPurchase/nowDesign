import React from 'react';

const SupabaseFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.57014 12.7083C1.18403 12.7083 0.403636 11.1148 1.25349 10.0197L8.50858 0.671931C8.99533 0.0447633 10.0002 0.388971 10.0002 1.18287V7.29166H17.4302C18.8164 7.29166 19.5967 8.88517 18.7469 9.98017L11.4918 19.3281C11.0051 19.9552 10.0002 19.611 10.0002 18.8171V12.7083H2.57014Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SupabaseFill;
