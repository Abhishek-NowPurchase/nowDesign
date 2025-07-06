import React from 'react';

const CornerRightDownLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M11.6665 4.16674L4.16659 4.16663L4.16656 5.83329L9.99983 5.83338L9.99991 14.3099L6.70846 11.0185L5.52995 12.197L10.8332 17.5003L16.1366 12.197L14.958 11.0185L11.6666 14.31L11.6665 4.16674Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CornerRightDownLine;
