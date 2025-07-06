import React from 'react';

const MapPin2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15.3033 14.47L10 19.7732L4.6967 14.47C1.76777 11.541 1.76777 6.79226 4.6967 3.86333C7.62563 0.934393 12.3743 0.934393 15.3033 3.86333C18.2322 6.79226 18.2322 11.541 15.3033 14.47ZM10 10.8333C10.9205 10.8333 11.6667 10.0871 11.6667 9.16663C11.6667 8.24615 10.9205 7.49996 10 7.49996C9.0795 7.49996 8.33333 8.24615 8.33333 9.16663C8.33333 10.0871 9.0795 10.8333 10 10.8333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MapPin2Fill;
