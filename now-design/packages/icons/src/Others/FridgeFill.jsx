import React from 'react';

const FridgeFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.6653 10V18.3334C16.6653 18.7936 16.2922 19.1667 15.832 19.1667H4.16536C3.70512 19.1667 3.33203 18.7936 3.33203 18.3334V10H16.6653ZM7.4987 11.6667H5.83203V15.8334H7.4987V11.6667ZM15.832 0.833374C16.2922 0.833374 16.6653 1.20647 16.6653 1.66671V8.33337H3.33203V1.66671C3.33203 1.20647 3.70512 0.833374 4.16536 0.833374H15.832ZM7.4987 3.33337H5.83203V6.66671H7.4987V3.33337Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FridgeFill;
