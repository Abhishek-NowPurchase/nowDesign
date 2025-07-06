import React from 'react';

const SchoolFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M19.1666 15.8332H18.3333V7.49989H15V5.48803L9.99998 0.488037L4.99998 5.48803V7.49989H1.66665V15.8332H0.833313V17.4999H19.1666V15.8332ZM4.99998 15.8333H3.33331V9.16663H4.99998V15.8333ZM15 9.16663H16.6666V15.8333H15V9.16663ZM9.16665 9.99996H10.8333V15.8333H9.16665V9.99996Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SchoolFill;
