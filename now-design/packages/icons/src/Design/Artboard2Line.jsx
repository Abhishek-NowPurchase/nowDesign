import React from 'react';

const Artboard2Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M6.66675 6.66663V13.3333H13.3334V6.66663H6.66675ZM5.00008 4.99996H15.0001V15H5.00008V4.99996ZM5.00008 1.66663H6.66675V4.16663H5.00008V1.66663ZM5.00008 15.8333H6.66675V18.3333H5.00008V15.8333ZM1.66675 4.99996H4.16675V6.66663H1.66675V4.99996ZM1.66675 13.3333H4.16675V15H1.66675V13.3333ZM15.8334 4.99996H18.3334V6.66663H15.8334V4.99996ZM15.8334 13.3333H18.3334V15H15.8334V13.3333ZM13.3334 1.66663H15.0001V4.16663H13.3334V1.66663ZM13.3334 15.8333H15.0001V18.3333H13.3334V15.8333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Artboard2Line;
