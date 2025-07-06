import React from 'react';

const FlickrFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.16634 10C9.16634 12.3013 7.30089 14.1667 4.99966 14.1667C2.69842 14.1667 0.833008 12.3013 0.833008 10C0.833008 7.6992 2.69842 5.83337 4.99966 5.83337C7.30089 5.83337 9.16634 7.6992 9.16634 10ZM19.1663 10C19.1663 12.3013 17.3009 14.1667 14.9997 14.1667C12.6984 14.1667 10.833 12.3013 10.833 10C10.833 7.6992 12.6984 5.83337 14.9997 5.83337C17.3009 5.83337 19.1663 7.6992 19.1663 10Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FlickrFill;
