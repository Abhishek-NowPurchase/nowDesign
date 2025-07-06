import React from 'react';

const SlideshowLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.8333 17.5V19.1667H9.16662V17.5H2.49996C2.03973 17.5 1.66663 17.1269 1.66663 16.6667V5H18.3333V16.6667C18.3333 17.1269 17.9602 17.5 17.5 17.5H10.8333ZM3.33329 15.8333H16.6666V6.66667H3.33329V15.8333ZM10.8333 8.33333H15V10H10.8333V8.33333ZM10.8333 11.6667H15V13.3333H10.8333V11.6667ZM7.49996 8.33333V10.8333H9.99996C9.99996 12.2141 8.88071 13.3333 7.49996 13.3333C6.11925 13.3333 4.99996 12.2141 4.99996 10.8333C4.99996 9.45258 6.11925 8.33333 7.49996 8.33333ZM1.66663 2.5H18.3333V4.16667H1.66663V2.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SlideshowLine;
