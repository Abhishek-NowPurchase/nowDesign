import React from 'react';

const AddFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.16699 9.16663V4.16663H10.8337V9.16663H15.8337V10.8333H10.8337V15.8333H9.16699V10.8333H4.16699V9.16663H9.16699Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default AddFill;
