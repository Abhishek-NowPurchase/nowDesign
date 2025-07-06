import React from 'react';

const ProductHuntFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0013 18.3333C5.39893 18.3333 1.66797 14.6023 1.66797 9.99996C1.66797 5.39758 5.39893 1.66663 10.0013 1.66663C14.6037 1.66663 18.3347 5.39758 18.3347 9.99996C18.3347 14.6023 14.6037 18.3333 10.0013 18.3333ZM11.1126 9.99996H8.75132V7.49996H11.1126C11.8029 7.49996 12.3626 8.0596 12.3626 8.74996C12.3626 9.44029 11.8029 9.99996 11.1126 9.99996ZM11.1126 5.83329H7.08464V14.1666H8.75132V11.6666H11.1126C12.7234 11.6666 14.0292 10.3608 14.0292 8.74996C14.0292 7.13912 12.7234 5.83329 11.1126 5.83329Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ProductHuntFill;
