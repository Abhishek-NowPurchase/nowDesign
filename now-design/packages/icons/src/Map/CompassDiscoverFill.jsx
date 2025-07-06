import React from 'react';

const CompassDiscoverFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.8333 18.3333C6.23096 18.3333 2.5 14.6023 2.5 9.99996C2.5 5.39758 6.23096 1.66663 10.8333 1.66663C15.4357 1.66663 19.1667 5.39758 19.1667 9.99996C19.1667 14.6023 15.4357 18.3333 10.8333 18.3333ZM6.66667 9.58329L10 10.8333L11.25 14.1684L14.1667 6.66663L6.66667 9.58329Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CompassDiscoverFill;
