import React from 'react';

const Css3Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.1668 2.5L3.62513 5.28333H14.9502L14.5835 7.08333H3.2668L2.7168 9.85833H14.0418L13.4085 13.0333L8.84183 14.5417L4.88346 13.0333L5.15846 11.6667H2.37513L1.7168 15L8.25846 17.5L15.8002 15L16.8002 9.975L17.0002 8.96667L18.2835 2.5H4.1668Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Css3Fill;
