import React from 'react';

const ShareForwardLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.8333 11.6666H9.16667C6.28502 11.6666 3.78294 13.2918 2.52699 15.6755C2.50911 15.4527 2.5 15.2273 2.5 14.9999C2.5 10.3976 6.23096 6.66659 10.8333 6.66659V2.08325L19.5833 9.16659L10.8333 16.2499V11.6666ZM9.16667 9.99992H12.5V12.7564L16.9345 9.16659L12.5 5.57679V8.33325H10.8333C8.81625 8.33325 7.00843 9.229 5.78593 10.6445C6.84061 10.2261 7.98368 9.99992 9.16667 9.99992Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ShareForwardLine;
