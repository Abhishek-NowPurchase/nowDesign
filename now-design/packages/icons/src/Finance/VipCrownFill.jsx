import React from 'react';

const VipCrownFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M1.6709 15.8333H18.3376V17.5H1.6709V15.8333ZM1.6709 4.16663L5.83757 6.66663L10.0042 1.66663L14.1709 6.66663L18.3376 4.16663V14.1666H1.6709V4.16663Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default VipCrownFill;
