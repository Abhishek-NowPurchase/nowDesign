import React from 'react';

const ArrowRightDownLongFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.69648 3.51807L3.51797 4.69641L11.5237 12.7022L8.33333 15.8925H15.8926V8.33328L12.7022 11.5237L4.69648 3.51807Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowRightDownLongFill;
