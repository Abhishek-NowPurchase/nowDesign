import React from 'react';

const ArrowLeftDownLongFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.4819 4.69645L15.3036 3.51794L7.29778 11.5236L4.10747 8.33331V15.8926H11.6667L8.47633 12.7021L16.4819 4.69645Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowLeftDownLongFill;
