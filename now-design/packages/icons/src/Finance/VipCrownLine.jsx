import React from 'react';

const VipCrownLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M1.6709 15.8333H18.3376V17.5H1.6709V15.8333ZM1.6709 4.16663L5.83757 7.08329L10.0042 1.66663L14.1709 7.08329L18.3376 4.16663V14.1666H1.6709V4.16663ZM3.33757 7.36772V12.5H16.6709V7.36772L13.8213 9.36238L10.0042 4.40016L6.18712 9.36238L3.33757 7.36772Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default VipCrownLine;
