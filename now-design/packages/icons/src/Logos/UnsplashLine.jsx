import React from 'react';

const UnsplashLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M8.33433 8.33333V11.6667H11.667L11.6678 8.33333H17.5012L17.5003 11.6667L17.501 17.5H2.50098V8.33333H8.33433ZM6.66764 10H4.16764V15.8333H15.8343V13.3333L15.8341 10H13.3341L13.3332 13.3333H6.66764V10ZM13.3343 2.5V7.5H6.66764V2.5H13.3343ZM11.6677 4.16667H8.33433V5.83333H11.6677V4.16667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default UnsplashLine;
