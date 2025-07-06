import React from 'react';

const LayoutTopFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M18.3332 8.33333V16.6667C18.3332 17.1269 17.9601 17.5 17.4998 17.5H2.49984C2.0396 17.5 1.6665 17.1269 1.6665 16.6667V8.33333H18.3332ZM17.4998 2.5C17.9601 2.5 18.3332 2.8731 18.3332 3.33333V6.66667H1.6665V3.33333C1.6665 2.8731 2.0396 2.5 2.49984 2.5H17.4998Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default LayoutTopFill;
