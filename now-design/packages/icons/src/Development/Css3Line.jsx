import React from 'react';

const Css3Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.33317 11.6667H4.03285L3.57875 13.9371L8.36592 15.7323L14.3886 13.7247L15.3002 9.16667H2.83317L3.1665 7.5H15.6335L16.3002 4.16667H3.83317L4.1665 2.5H18.3332L15.8332 15L8.33317 17.5L1.6665 15L2.33317 11.6667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Css3Line;
