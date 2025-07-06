import React from 'react';

const QuillPenFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.5 1.66394C5 1.66394 3.33333 13.3306 2.5 18.3306C3.05556 18.3306 3.61063 18.3306 4.1652 18.3306C4.72018 15.553 6.10955 14.0253 8.33333 13.7473C11.6667 13.3306 14.1667 10.4139 15 7.91394L13.75 7.08061C14.0278 6.80283 14.3056 6.52505 14.5833 6.24727C15.4167 5.41394 16.2535 4.16394 17.5 1.66394Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default QuillPenFill;
