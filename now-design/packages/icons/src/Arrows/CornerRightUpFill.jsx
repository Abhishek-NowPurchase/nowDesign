import React from 'react';

const CornerRightUpFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M11.6666 15.8334L4.16668 15.8335L4.16666 14.1668L9.99991 14.1668L9.99999 7.84504H5.48816L10.8333 2.49988L16.1785 7.84504L11.6667 7.84505L11.6666 15.8334Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CornerRightUpFill;
