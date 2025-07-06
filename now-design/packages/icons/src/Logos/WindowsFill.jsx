import React from 'react';

const WindowsFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.50098 4.56585L8.64833 3.71875V9.6585H2.50098V4.56585ZM2.50098 15.4342L8.64833 16.2812V10.4152H2.50098V15.4342ZM9.32466 16.3717L17.501 17.5V10.4152H9.32466V16.3717ZM9.32466 3.62835V9.6585H17.501V2.5L9.32466 3.62835Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default WindowsFill;
