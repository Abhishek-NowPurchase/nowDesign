import React from 'react';

const ShareCircleLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9 0.0493801V2.06189C5.05369 2.55399 2 5.92038 2 10C2 14.4183 5.58172 18 10 18C14.0796 18 17.446 14.9463 17.9381 11H19.9506C19.4489 16.0533 15.1853 20 10 20C4.47715 20 0 15.5228 0 10C0 4.81465 3.94668 0.5511 9 0.0493801ZM18 3.41421L10 11.4142L8.5858 10L16.5858 2H12V0H20V8H18V3.41421Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ShareCircleLine;
