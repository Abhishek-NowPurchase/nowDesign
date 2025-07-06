import React from 'react';

const SchoolLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.99998 0.488037L15 5.48804V7.49996H18.3333V15.8333H19.1666V17.5H0.833313V15.8333H1.66665V7.49996H4.99998V5.48804L9.99998 0.488037ZM15 15.8333H16.6666V9.16663H15V15.8333ZM4.99998 9.16663H3.33331V15.8333H4.99998V9.16663ZM6.66665 6.17839V15.8332H9.16665V9.99996H10.8333V15.8332H13.3333V6.17839L9.99998 2.84506L6.66665 6.17839Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SchoolLine;
