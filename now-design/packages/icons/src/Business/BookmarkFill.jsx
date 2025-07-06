import React from 'react';

const BookmarkFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.16671 1.66663H15.8334C16.2936 1.66663 16.6667 2.03973 16.6667 2.49996V18.4527C16.6667 18.6828 16.4801 18.8695 16.25 18.8695C16.1718 18.8695 16.095 18.8473 16.0287 18.8057L10 15.026L3.97137 18.8057C3.7764 18.928 3.51926 18.869 3.39702 18.674C3.35543 18.6077 3.33337 18.531 3.33337 18.4527V2.49996C3.33337 2.03973 3.70647 1.66663 4.16671 1.66663Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default BookmarkFill;
