import React from 'react';

const CornerRightDownFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M11.6666 4.16661L4.16668 4.1665L4.16666 5.83317L9.99991 5.83325L9.99999 12.155H5.48816L10.8333 17.5001L16.1785 12.155H11.6667L11.6666 4.16661Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CornerRightDownFill;
