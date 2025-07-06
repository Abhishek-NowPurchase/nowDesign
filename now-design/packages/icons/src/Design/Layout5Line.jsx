import React from 'react';

const Layout5Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.49984 17.5C2.0396 17.5 1.6665 17.1269 1.6665 16.6667V3.33333C1.6665 2.8731 2.0396 2.5 2.49984 2.5H17.4998C17.9601 2.5 18.3332 2.8731 18.3332 3.33333V16.6667C18.3332 17.1269 17.9601 17.5 17.4998 17.5H2.49984ZM5.83317 8.33333H3.33317V15.8333H5.83317V8.33333ZM16.6665 8.33333H7.49984V15.8333H16.6665V8.33333ZM16.6665 4.16667H3.33317V6.66667H16.6665V4.16667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Layout5Line;
