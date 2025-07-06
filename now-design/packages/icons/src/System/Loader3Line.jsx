import React from 'react';

const Loader3Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.54492 10.8333H4.22489C4.62925 13.6602 7.06042 15.8333 9.99918 15.8333C12.9378 15.8333 15.369 13.6602 15.7734 10.8333H17.4533C17.0388 14.5833 13.8596 17.5 9.99918 17.5C6.13869 17.5 2.95946 14.5833 2.54492 10.8333ZM2.54492 9.16667C2.95946 5.41671 6.13869 2.5 9.99918 2.5C13.8596 2.5 17.0388 5.41671 17.4533 9.16667H15.7734C15.369 6.33976 12.9378 4.16667 9.99918 4.16667C7.06042 4.16667 4.62925 6.33976 4.22489 9.16667H2.54492Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Loader3Line;
