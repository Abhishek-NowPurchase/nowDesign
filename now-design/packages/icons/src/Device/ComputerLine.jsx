import React from 'react';

const ComputerLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33317 13.3333H16.6665V4.16667H3.33317V13.3333ZM10.8332 15V16.6667H14.1665V18.3333H5.83317V16.6667H9.1665V15H2.493C2.03655 15 1.6665 14.6259 1.6665 14.1604V3.33957C1.6665 2.87589 2.04593 2.5 2.493 2.5H17.5067C17.9632 2.5 18.3332 2.8741 18.3332 3.33957V14.1604C18.3332 14.6241 17.9538 15 17.5067 15H10.8332Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ComputerLine;
