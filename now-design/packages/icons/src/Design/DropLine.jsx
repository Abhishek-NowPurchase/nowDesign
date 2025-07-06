import React from 'react';

const DropLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10 2.58102L5.87521 6.70581C3.59715 8.98383 3.59715 12.6773 5.87521 14.9554C8.15327 17.2334 11.8467 17.2334 14.1247 14.9554C16.4028 12.6773 16.4028 8.98383 14.1247 6.70581L10 2.58102ZM10 0.223999L15.3033 5.5273C18.2322 8.45625 18.2322 13.205 15.3033 16.1339C12.3743 19.0628 7.62563 19.0628 4.6967 16.1339C1.76777 13.205 1.76777 8.45625 4.6967 5.5273L10 0.223999Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default DropLine;
