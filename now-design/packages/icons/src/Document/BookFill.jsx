import React from 'react';

const BookFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.6667 18.3333H5.41667C3.80583 18.3333 2.5 17.0275 2.5 15.4166V4.16663C2.5 2.78592 3.61929 1.66663 5 1.66663H16.6667C17.1269 1.66663 17.5 2.03973 17.5 2.49996V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333ZM15.8333 16.6666V14.1666H5.41667C4.72631 14.1666 4.16667 14.7263 4.16667 15.4166C4.16667 16.107 4.72631 16.6666 5.41667 16.6666H15.8333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default BookFill;
