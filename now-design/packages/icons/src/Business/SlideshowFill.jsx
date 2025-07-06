import React from 'react';

const SlideshowFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.8333 17.5V19.1667H9.16662V17.5H2.49996C2.03973 17.5 1.66663 17.1269 1.66663 16.6667V5H18.3333V16.6667C18.3333 17.1269 17.9602 17.5 17.5 17.5H10.8333ZM6.66663 8.33333C5.28592 8.33333 4.16663 9.45258 4.16663 10.8333C4.16663 12.2141 5.28592 13.3333 6.66663 13.3333C8.04733 13.3333 9.16662 12.2141 9.16662 10.8333H6.66663V8.33333ZM10.8333 8.33333V10H15.8333V8.33333H10.8333ZM10.8333 11.6667V13.3333H15.8333V11.6667H10.8333ZM1.66663 2.5H18.3333V4.16667H1.66663V2.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SlideshowFill;
