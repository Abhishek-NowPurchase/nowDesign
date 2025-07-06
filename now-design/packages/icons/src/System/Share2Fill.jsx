import React from 'react';

const Share2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15.3453 7.5002L10.0002 2.15503L4.65495 7.5002H9.16667V13.3334H10.8333V7.5002H15.3453ZM2.5 11.6667V15.0001C2.5 16.3808 3.61929 17.5001 5 17.5001H15C16.3807 17.5001 17.5 16.3808 17.5 15.0001V11.6667H15.8333V15.0001C15.8333 15.4603 15.4602 15.8334 15 15.8334H5C4.53977 15.8334 4.16667 15.4603 4.16667 15.0001V11.6667H2.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Share2Fill;
