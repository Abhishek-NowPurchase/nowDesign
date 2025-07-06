import React from 'react';

const Image2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.16667 9.25042L5.83333 7.58375L10.4167 12.1671L13.3333 9.25042L15.8333 11.7504V4.16667H4.16667V9.25042ZM3.33333 2.5H16.6667C17.1269 2.5 17.5 2.8731 17.5 3.33333V16.6667C17.5 17.1269 17.1269 17.5 16.6667 17.5H3.33333C2.8731 17.5 2.5 17.1269 2.5 16.6667V3.33333C2.5 2.8731 2.8731 2.5 3.33333 2.5ZM12.9167 8.33333C12.2263 8.33333 11.6667 7.77369 11.6667 7.08333C11.6667 6.39297 12.2263 5.83333 12.9167 5.83333C13.607 5.83333 14.1667 6.39297 14.1667 7.08333C14.1667 7.77369 13.607 8.33333 12.9167 8.33333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Image2Fill;
