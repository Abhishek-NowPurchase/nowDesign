import React from 'react';

const PagesFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.6667 18.3333H3.33333C2.8731 18.3333 2.5 17.9602 2.5 17.5V6.66663H17.5V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333ZM17.5 4.99996H2.5V2.49996C2.5 2.03973 2.8731 1.66663 3.33333 1.66663H16.6667C17.1269 1.66663 17.5 2.03973 17.5 2.49996V4.99996ZM5.83333 9.16662V12.5H9.16667V9.16662H5.83333ZM5.83333 14.1666V15.8333H14.1667V14.1666H5.83333ZM10.8333 9.99996V11.6666H14.1667V9.99996H10.8333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PagesFill;
